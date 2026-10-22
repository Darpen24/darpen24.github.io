const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
(async () => {
  const out = path.resolve(process.env.PORTFOLIO_TEST_OUTPUT || 'test-results'); fs.mkdirSync(out, {recursive:true});
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext({viewport:{width:1440,height:1000}});
  const page = await context.newPage();
  const errors=[], failures=[];
  page.on('pageerror', e=>errors.push(e.message));
  page.on('response', r=>{if(r.status()>=400 && r.url().includes('127.0.0.1')) failures.push(`${r.status()} ${r.url()}`)});
  await page.goto('http://127.0.0.1:8080');
  await page.waitForTimeout(1000);
  assert.equal(await page.locator('[data-opening]').isVisible(),false);
  assert.equal(await page.locator('#projects .project-card').count(),5);
  assert.equal(await page.locator('.skill-card').count(),6);
  assert.equal(await page.locator('#skills details').count(),6);
  assert.equal(await page.locator('.hero-title').innerText(),'Data Engineer | Analytics & Applied AI');
  await page.screenshot({path:path.join(out,'portfolio-desktop.png')});
  for (const details of await page.locator('#skills details').all()) {
    const summary=details.locator('summary'); await summary.focus(); await page.keyboard.press('Enter');
    await page.waitForTimeout(450);
    assert.equal(await details.getAttribute('open'),'');
    assert.equal(await summary.getAttribute('aria-expanded'),'true');
    assert.ok(await details.locator('a[href^="https://github.com/"]').count());
    await page.keyboard.press('Space'); await page.waitForTimeout(450);
    assert.equal(await summary.getAttribute('aria-expanded'),'false');
  }
  await page.locator('#skills details').first().locator('summary').click();
  await page.waitForTimeout(450);
  await page.evaluate(()=>window.scrollTo({top:document.querySelector('#skills').getBoundingClientRect().top+scrollY-90,behavior:'instant'}));
  await page.screenshot({path:path.join(out,'portfolio-evidence-desktop.png')});
  await page.locator('[data-language="de"]').click();
  assert.equal(await page.locator('html').getAttribute('lang'),'de');
  assert.match(await page.locator('[data-i18n="german"]').innerText(),/Fließend/);
  assert.equal(await page.locator('#skills summary').first().innerText(),'Nachweise ansehen\n+');
  assert.equal(await page.locator('.site-nav').getAttribute('aria-label'),'Hauptnavigation');
  await page.locator('[data-subject="recruitment"]').click();
  assert.equal(await page.locator('[name="subject"]').inputValue(),'Bewerbungsanfrage');
  await page.reload(); assert.equal(await page.locator('html').getAttribute('lang'),'de');
  assert.equal(await page.locator('[data-opening]').isVisible(),false);
  await page.locator('[data-language="en"]').click();
  for (const [category,count] of [['data',1],['analytics',4],['ai',2],['science',1],['all',5]]) {
    await page.locator(`[data-project-filter="${category}"]`).click();
    assert.equal(await page.locator('.project-card:visible').count(),count);
    assert.equal(await page.locator(`[data-project-filter="${category}"]`).getAttribute('aria-pressed'),'true');
  }
  // Observe the actual form navigation in headless Chromium; no OS mail app launches.
  const cdp=await context.newCDPSession(page); await cdp.send('Page.enable');
  const draftNavigation=new Promise(resolve=>cdp.on('Page.frameRequestedNavigation',event=>{if(event.url.startsWith('mailto:')) resolve(event.url)}));
  await page.locator('[name="name"]').fill('Test Recruiter');
  await page.locator('[name="email"]').fill('recruiter@example.com');
  await page.locator('[name="subject"]').fill('Data & AI opportunity');
  await page.locator('[name="message"]').fill('Let’s discuss a role.');
  await page.locator('#contact-form [type="submit"]').click();
  const draft=await draftNavigation;
  assert.match(draft,/subject=Data%20%26%20AI%20opportunity/);
  assert.match(decodeURIComponent(draft),/Email: recruiter@example.com/);
  await context.grantPermissions(['clipboard-read','clipboard-write']);
  await page.locator('[data-copy-email]').click();
  assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'darpen.bhandari@gmail.com');
  await page.goto('http://127.0.0.1:8080/projects.html');
  assert.equal(await page.locator('.project-card').count(),9);
  for (const [category,count] of [['data',3],['analytics',5],['ai',4],['science',2],['all',9]]) {
    await page.locator(`[data-project-filter="${category}"]`).click();
    assert.equal(await page.locator('.project-card:visible').count(),count);
  }
  // Every translated key exists; no translation accidentally replaces nested content.
  for (const url of ['index.html','projects.html']) {
    await page.goto('http://127.0.0.1:8080/'+url);
    const vm=require('vm');
    const original=fs.readFileSync(path.join(__dirname,'../assets/main.js'),'utf8').match(/const translations = ([\s\S]*?);\r?\n\r?\n/)[1];
    const dictionary=vm.runInNewContext('('+original+')');
    const additional=await page.evaluate(()=>window.portfolioCopy);
    const keys=await page.evaluate(()=>[...document.querySelectorAll('[data-i18n],[data-i18n-aria-label]')].map(el=>el.dataset.i18n||el.dataset.i18nAriaLabel));
    for(const lang of ['en','de']) assert.deepEqual(keys.filter(key=>!(additional[lang][key]||dictionary[lang][key])),[]);
    for (const width of [320,375,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${url} overflow ${width}`);
      // Hidden body overflow should not mask a wide child.
      const overflow=await page.evaluate(()=>[...document.querySelectorAll('main *')].filter(el=>el.getClientRects().length && el.getBoundingClientRect().right>innerWidth+1).map(el=>el.className));
      assert.deepEqual(overflow,[],`${url} wide children ${width}`);
    }
  }
  await page.goto('http://127.0.0.1:8080');
  await page.setViewportSize({width:375,height:850});
  await page.locator('.menu-button').click();
  assert.equal(await page.locator('.menu-button').getAttribute('aria-expanded'),'true');
  await page.locator('.site-nav a[href="#skills"]').click();
  assert.equal(await page.locator('.menu-button').getAttribute('aria-expanded'),'false');
  await page.locator('#skills summary').first().click();await page.waitForTimeout(300);
  await page.evaluate(()=>window.scrollTo({top:document.querySelector('#skills').getBoundingClientRect().top+scrollY-90,behavior:'instant'}));
  await page.screenshot({path:path.join(out,'portfolio-evidence-mobile.png')});
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.screenshot({path:path.join(out,'portfolio-mobile.png')});
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.reload();
  assert.equal(await page.locator('[data-opening]').isVisible(),false);
  assert.equal(await page.locator('.network svg').evaluate(el=>el.animationsPaused()),true);
  // Simulate storage denial and an unknown persisted language.
  const blocked=await browser.newContext();
  await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage blocked')}});Object.defineProperty(window,'sessionStorage',{get(){throw new Error('Storage blocked')}})});
  const bp=await blocked.newPage();bp.on('pageerror',e=>errors.push(e.message));
  await bp.goto('http://127.0.0.1:8080');await bp.locator('[data-language="de"]').click();
  assert.equal(await bp.locator('html').getAttribute('lang'),'de');
  const introContext=await browser.newContext();
  const ip=await introContext.newPage();
  await ip.goto('http://127.0.0.1:8080',{waitUntil:'domcontentloaded'});
  assert.equal(await ip.locator('[data-opening]').isVisible(),true);
  await ip.locator('[data-skip-opening]').click();
  assert.equal(await ip.locator('[data-opening]').isVisible(),false);
  await ip.reload();assert.equal(await ip.locator('[data-opening]').isVisible(),false);
  const invalid=await browser.newContext();await invalid.addInitScript(()=>localStorage.setItem('portfolioLanguageV2','unsupported'));
  const invalidPage=await invalid.newPage();await invalidPage.goto('http://127.0.0.1:8080');assert.equal(await invalidPage.locator('html').getAttribute('lang'),'en');
  const nojs=await browser.newContext({javaScriptEnabled:false}); const np=await nojs.newPage();
  await np.goto('http://127.0.0.1:8080'); assert.equal(await np.locator('.hero-copy').isVisible(),true);
  await np.locator('#skills summary').first().click();assert.equal(await np.locator('#skills details').first().getAttribute('open'),'');
  assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
  const result={passed:true,checks:['5 homepage / 9 index cards','6 keyboard-operable evidence disclosures','EN/DE switching and persistence','filter counts and aria-pressed on both pages','subject shortcuts and copy email','actual contact-form mailto navigation and encoded fields (headless)','320/375/768/1024/1440px layouts with no horizontal overflow','mobile menu','reduced motion including SVG','blocked storage','no-JS content and native disclosures','intro skip and once-per-session replay guard','unknown-language fallback','all EN/DE text and ARIA translation keys','no local HTTP or JS errors'],screenshots:4};
  fs.writeFileSync(path.join(out,'validation.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify(result,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

