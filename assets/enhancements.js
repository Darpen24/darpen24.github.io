/* Progressive enhancements: native disclosures and links work without this file. */
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const language = () => document.documentElement.lang;
  const t = (key) => window.portfolioCopy?.[language()]?.[key] || window.portfolioCopy?.en?.[key] || key;

  document.querySelectorAll('.evidence-details').forEach((details) => {
    const summary = details.querySelector('summary');
    const body = details.querySelector('.disclosure-body');
    let animation;
    const sync = () => summary.setAttribute('aria-expanded', String(details.open));
    details.addEventListener('toggle', sync);
    summary.addEventListener('click', (event) => {
      if (motion.matches || !body.animate) return;
      event.preventDefault();
      if (animation) return;
      const closing = details.open;
      if (!closing) details.open = true;
      summary.setAttribute('aria-expanded', String(!closing));
      const height = body.getBoundingClientRect().height;
      body.style.overflow = 'hidden';
      animation = body.animate(
        [{ height: closing ? `${height}px` : '0px', opacity: closing ? 1 : 0 },
          { height: closing ? '0px' : `${height}px`, opacity: closing ? 0 : 1 }],
        { duration: 200, easing: 'ease-out' }
      );
      animation.onfinish = () => {
        if (closing) details.open = false;
        body.style.overflow = '';
        animation = null;
        sync();
      };
    });
  });

  let activeFilter = 'all';
  const cards = [...document.querySelectorAll('[data-project-category]')];
  function announce() {
    // Count project cards only; the retained service case study duplicates its index card.
    const count = cards.filter((card) => card.classList.contains('project-card') && !card.hidden).length;
    document.querySelectorAll('[data-filter-status]').forEach((status) => { status.textContent = `${count} ${t('results')}`; });
  }
  document.querySelectorAll('[data-project-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.projectFilter;
      document.querySelectorAll('[data-project-filter]').forEach((item) => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      cards.forEach((card) => {
        card.hidden = activeFilter !== 'all' && !card.dataset.projectCategory.split(' ').includes(activeFilter);
        if (!card.hidden) {
          card.classList.add('in-view');
          if (!motion.matches) card.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 180 });
        }
      });
      announce();
    });
  });
  document.addEventListener('portfolio:language', announce);
  if (cards.length) announce();

  document.querySelectorAll('[data-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      const field = document.querySelector('#contact-form [name="subject"]');
      field.value = t(button.dataset.subject);
      field.focus();
    });
  });

  // The welcome strip never blocks the hero, pointer input, navigation or scrolling.
  const opening = document.querySelector('[data-opening]');
  if (opening) {
    let seen = false;
    try { seen = sessionStorage.getItem('portfolioIntroV1') === 'seen'; sessionStorage.setItem('portfolioIntroV1', 'seen'); }
    catch { seen = true; }
    if (!seen && !motion.matches) {
      opening.hidden = false;
      const skip = opening.querySelector('[data-skip-opening]');
      const finish = () => {
        if (opening.contains(document.activeElement)) {
          const heroLink = document.querySelector('.hero-actions a');
          heroLink?.focus({ preventScroll: true });
        }
        opening.hidden = true;
      };
      const timer = setTimeout(finish, 850);
      skip.addEventListener('click', () => { clearTimeout(timer); finish(); });
      motion.addEventListener('change', () => { if (motion.matches) { clearTimeout(timer); finish(); } });
    }
  }
  // CSS cannot stop SVG SMIL animation; pause it explicitly for reduced motion.
  const svg = document.querySelector('.network svg');
  function syncMotion() {
    if (!svg) return;
    if (motion.matches) svg.pauseAnimations?.(); else svg.unpauseAnimations?.();
  }
  syncMotion();
  motion.addEventListener('change', syncMotion);
})();
