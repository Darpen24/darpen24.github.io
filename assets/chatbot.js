(function () {
  const CONTACT_EMAIL = "darpen.bhandari@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/darpen-bhandari/";

  const copy = {
    en: {
      kicker: "// PORTFOLIO ASSISTANT",
      title: "Ask about Darpen",
      subtitle: "Fast answers for recruiters, hiring teams and collaborators.",
      greeting:
        "Hi, I can help you quickly understand Darpen's data engineering background, projects, skills and availability.",
      placeholder: "Ask about Azure, Power BI, projects...",
      call: "Request a call",
      email: "Email Darpen",
      linkedin: "Connect on LinkedIn",
      close: "Close chat",
      open: "Open chat",
      send: "Send message",
      chips: [
        { label: "What roles is Darpen open to?", intent: "availability" },
        { label: "Summarize his experience", intent: "experience" },
        { label: "Which projects stand out?", intent: "projects" },
        { label: "What are his core skills?", intent: "skills" }
      ],
      answers: {
        availability:
          "Darpen is open to full-time Data Engineering, Azure Data Engineering, ETL/ELT and BI Engineering roles across Germany and Europe. Interviews can happen by Google Meet, Microsoft Teams or phone.",
        experience:
          "Darpen has around 5 years of experience building ETL/ELT pipelines, REST API integrations, SQL transformations and reporting-ready datasets across finance and healthcare environments.",
        projects:
          "Strong highlights include the Stroke Risk Analytics Dashboard in Power BI, the Smart Electricity and Energy Optimizer pipeline, the CV Optimizer, and environmental lake monitoring workflows.",
        skills:
          "His core stack includes Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, Azure DevOps, REST APIs, Power BI, DAX, Power Query and data modeling.",
        contact:
          "The best next step is to request a call, send an email, or connect with Darpen on LinkedIn. The buttons below open each option directly.",
        linkedin:
          "LinkedIn cannot send Darpen a silent alert from this static site, but visitors can open his profile and send a connection request with context from the portfolio.",
        resume:
          "Darpen's resume is available from the hero section in both English and German. It highlights Azure Data Engineering, ETL/ELT, Power BI, finance and healthcare experience.",
        powerbi:
          "Darpen uses Power BI, DAX and Power Query to build KPI dashboards and reporting-ready views. The Stroke Risk Analytics Dashboard is the clearest Power BI portfolio example.",
        azure:
          "His Azure work includes Azure Data Factory, Azure Data Lake, Azure Storage, Azure SQL and Azure DevOps-supported ETL/ELT workflows.",
        python:
          "Python and SQL are core parts of his data engineering work: API integration, transformations, validation checks, automation and analytics-ready dataset preparation.",
        healthcare:
          "In healthcare, Darpen worked with Matrix42 and qTest data, incident analytics, SLA monitoring and the Stroke Risk Analytics Dashboard.",
        finance:
          "In finance, Darpen supported 22 financial applications across trade, portfolio, pricing, compliance and reporting domains, including AUM and portfolio exposure reporting.",
        energy:
          "The Smart Electricity and Energy Optimizer project shows end-to-end data pipeline work with electricity and solar data, forecasting preparation and energy optimization insights.",
        languages:
          "Darpen speaks fluent English, intermediate German and native Hindi, and is based in Mannheim, Germany.",
        fallback:
          "I found the closest portfolio topics around Data Engineering, Azure, Python, SQL, Power BI, finance, healthcare and projects. For a very specific question, LinkedIn or email is the best direct route."
      },
      mailSubjects: {
        call: "Call request from darpenbhandari.com",
        email: "Message from darpenbhandari.com"
      },
      mailBodies: {
        call:
          "Hi Darpen,%0D%0A%0D%0AI visited your portfolio and would like to schedule a call.%0D%0A%0D%0ARole/company:%0D%0APreferred times:%0D%0ATopic:%0D%0A",
        email:
          "Hi Darpen,%0D%0A%0D%0AI visited your portfolio and wanted to get in touch.%0D%0A%0D%0AMessage:%0D%0A"
      }
    },
    de: {
      kicker: "// PORTFOLIO ASSISTANT",
      title: "Darpen kurz kennenlernen",
      subtitle: "Schnelle Antworten fuer Recruiting, Hiring Teams und Projekte.",
      greeting:
        "Hallo, ich helfe Ihnen, Darpens Data-Engineering-Erfahrung, Projekte, Kenntnisse und Verfuegbarkeit schnell einzuordnen.",
      placeholder: "Fragen zu Azure, Power BI, Projekten...",
      call: "Call anfragen",
      email: "E-Mail senden",
      linkedin: "Auf LinkedIn vernetzen",
      close: "Chat schliessen",
      open: "Chat oeffnen",
      send: "Nachricht senden",
      chips: [
        { label: "Fuer welche Rollen ist Darpen offen?", intent: "availability" },
        { label: "Erfahrung zusammenfassen", intent: "experience" },
        { label: "Welche Projekte sind stark?", intent: "projects" },
        { label: "Was sind seine Kernkenntnisse?", intent: "skills" }
      ],
      answers: {
        availability:
          "Darpen ist offen fuer Vollzeitrollen in Data Engineering, Azure Data Engineering, ETL/ELT und BI Engineering in Deutschland und Europa. Interviews sind per Google Meet, Microsoft Teams oder Telefon moeglich.",
        experience:
          "Darpen hat rund 5 Jahre Erfahrung mit ETL/ELT-Pipelines, REST-API-Integrationen, SQL-Transformationen und reportingfaehigen Datensaetzen in Finance- und Healthcare-Umgebungen.",
        projects:
          "Besonders relevant sind das Stroke Risk Analytics Dashboard in Power BI, die Smart Electricity and Energy Optimizer Pipeline, der CV Optimizer und Workflows fuer Lake Monitoring.",
        skills:
          "Sein Kernstack umfasst Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, Azure DevOps, REST APIs, Power BI, DAX, Power Query und Datenmodellierung.",
        contact:
          "Der beste naechste Schritt ist eine Call-Anfrage, eine E-Mail oder eine LinkedIn-Anfrage. Die Buttons unten oeffnen die passende Option direkt.",
        linkedin:
          "LinkedIn kann von dieser statischen Website keinen stillen Alert an Darpen senden. Besucher koennen aber sein Profil oeffnen und eine Kontaktanfrage mit Portfolio-Kontext schicken.",
        resume:
          "Darpens Lebenslauf ist im Hero-Bereich auf Englisch und Deutsch verfuegbar. Er zeigt Azure Data Engineering, ETL/ELT, Power BI sowie Finance- und Healthcare-Erfahrung.",
        powerbi:
          "Darpen nutzt Power BI, DAX und Power Query fuer KPI-Dashboards und reportingfaehige Ansichten. Das Stroke Risk Analytics Dashboard ist das klarste Power-BI-Beispiel im Portfolio.",
        azure:
          "Seine Azure-Erfahrung umfasst Azure Data Factory, Azure Data Lake, Azure Storage, Azure SQL und Azure-DevOps-gestuetzte ETL/ELT-Workflows.",
        python:
          "Python und SQL sind Kernbestandteile seiner Data-Engineering-Arbeit: API-Integration, Transformationen, Validierungschecks, Automatisierung und reportingfaehige Datensaetze.",
        healthcare:
          "Im Healthcare-Bereich arbeitete Darpen mit Matrix42- und qTest-Daten, Incident Analytics, SLA-Monitoring und dem Stroke Risk Analytics Dashboard.",
        finance:
          "Im Finance-Bereich unterstuetzte Darpen 22 Finanzanwendungen in Trade, Portfolio, Pricing, Compliance und Reporting, inklusive AUM- und Portfolio-Exposure-Reporting.",
        energy:
          "Das Smart Electricity and Energy Optimizer Projekt zeigt End-to-End-Pipeline-Arbeit mit Strom- und Solardaten, Forecasting-Vorbereitung und Energieoptimierung.",
        languages:
          "Darpen spricht fliessend Englisch, Deutsch auf Mittelstufe und Hindi als Muttersprache. Er lebt in Mannheim, Deutschland.",
        fallback:
          "Ich habe die naheliegenden Portfolio-Themen rund um Data Engineering, Azure, Python, SQL, Power BI, Finance, Healthcare und Projekte geprueft. Fuer sehr spezifische Fragen sind LinkedIn oder E-Mail der beste direkte Weg."
      },
      mailSubjects: {
        call: "Call-Anfrage von darpenbhandari.com",
        email: "Nachricht von darpenbhandari.com"
      },
      mailBodies: {
        call:
          "Hallo Darpen,%0D%0A%0D%0AIch habe dein Portfolio besucht und moechte gerne einen Call vereinbaren.%0D%0A%0D%0ARolle/Unternehmen:%0D%0AWunschzeiten:%0D%0AThema:%0D%0A",
        email:
          "Hallo Darpen,%0D%0A%0D%0AIch habe dein Portfolio besucht und moechte Kontakt aufnehmen.%0D%0A%0D%0ANachricht:%0D%0A"
      }
    }
  };

  const icons = {
    chat:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.7 8.7 0 0 1-3.7-.8L3 21l1.8-5A8.4 8.4 0 0 1 3 11.5 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 9 8.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11h8M8 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 11.5 16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };

  function getLanguage() {
    return localStorage.getItem("portfolioLanguage") === "en" ? "en" : "de";
  }

  function mailto(type, lang) {
    const current = copy[lang];
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      current.mailSubjects[type]
    )}&body=${current.mailBodies[type]}`;
  }

  function detectIntent(message) {
    const text = message.toLowerCase();
    const matchers = [
      { intent: "contact", pattern: /call|meet|interview|phone|email|mail|kontakt|termin|anruf|gespraech|gesprach/ },
      { intent: "linkedin", pattern: /linkedin|connect|connection|vernetzen|kontaktanfrage/ },
      { intent: "resume", pattern: /resume|cv|curriculum|lebenslauf|bewerbung/ },
      { intent: "availability", pattern: /role|open|available|availability|job|position|hire|hiring|recruit|rolle|verfuegbar|verfugbar|stelle/ },
      { intent: "experience", pattern: /experience|work|years|career|professional|erfahrung|beruf|werdegang/ },
      { intent: "powerbi", pattern: /power bi|powerbi|dax|power query|dashboard|kpi|reporting|bericht/ },
      { intent: "azure", pattern: /azure|adf|data factory|data lake|devops|storage|cloud/ },
      { intent: "python", pattern: /python|sql|api|rest|etl|elt|pipeline|automation|automatisierung/ },
      { intent: "healthcare", pattern: /healthcare|health|hospital|heidelberg|stroke|sla|matrix42|qtest|incident|gesundheit|krankenhaus/ },
      { intent: "finance", pattern: /finance|financial|trade|portfolio|pricing|compliance|aum|investment|jennison|hexaware|finanz/ },
      { intent: "energy", pattern: /energy|electricity|solar|forecast|optimizer|strom|energie|forecasting/ },
      { intent: "projects", pattern: /project|portfolio|optimizer|lake|wine|projekt|projekte/ },
      { intent: "languages", pattern: /language|german|english|hindi|mannheim|germany|deutsch|sprache|sprachen|standort/ },
      { intent: "skills", pattern: /skill|stack|tech|tools|kenntnis|faehigkeit|fahigkeit|kompetenz/ }
    ];

    const match = matchers.find((item) => item.pattern.test(text));
    return match ? match.intent : "fallback";
  }

  function createMessage(text, type) {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    message.textContent = text;
    return message;
  }

  function createSuggestions(chips, onSelect) {
    const suggestions = document.createElement("div");
    suggestions.className = "chatbot-suggestions";

    chips.forEach((chip) => {
      const button = document.createElement("button");
      button.className = "chatbot-chip";
      button.type = "button";
      button.textContent = chip.label;
      button.addEventListener("click", () => onSelect(chip.intent, chip.label));
      suggestions.appendChild(button);
    });

    return suggestions;
  }

  function clearSuggestions(messages) {
    messages.querySelectorAll(".chatbot-suggestions").forEach((node) => node.remove());
  }

  function renderChatbot() {
    const root = document.createElement("div");
    root.className = "chatbot-root";
    root.innerHTML = `
      <section class="chatbot-panel" aria-label="Portfolio chatbot">
        <header class="chatbot-header">
          <div>
            <p class="chatbot-kicker"></p>
            <h2 class="chatbot-title"></h2>
            <p class="chatbot-subtitle"></p>
          </div>
          <button class="chatbot-close" type="button"></button>
        </header>
        <div class="chatbot-messages" aria-live="polite"></div>
        <div class="chatbot-actions" aria-hidden="true"></div>
        <div class="chatbot-contact-row"></div>
        <form class="chatbot-form">
          <input class="chatbot-input" type="text" autocomplete="off" />
          <button class="chatbot-send" type="submit">${icons.send}</button>
        </form>
      </section>
      <button class="chatbot-toggle" type="button">${icons.chat}</button>
    `;

    document.body.appendChild(root);

    const panel = root.querySelector(".chatbot-panel");
    const toggle = root.querySelector(".chatbot-toggle");
    const close = root.querySelector(".chatbot-close");
    const messages = root.querySelector(".chatbot-messages");
    const contactRow = root.querySelector(".chatbot-contact-row");
    const form = root.querySelector(".chatbot-form");
    const input = root.querySelector(".chatbot-input");
    let language = getLanguage();
    let hasGreeted = false;

    function scrollMessages() {
      messages.scrollTop = messages.scrollHeight;
    }

    function showSuggestions(shouldScroll) {
      clearSuggestions(messages);
      messages.appendChild(createSuggestions(copy[language].chips, replyToIntent));

      if (shouldScroll) {
        scrollMessages();
      }
    }

    function addBotMessage(text, showNextSuggestions, focusAnswer) {
      const message = createMessage(text, "bot");
      messages.appendChild(message);

      if (showNextSuggestions) {
        showSuggestions(!focusAnswer);
      } else {
        scrollMessages();
      }

      if (focusAnswer) {
        messages.scrollTop = 0;
      }
    }

    function addUserMessage(text) {
      clearSuggestions(messages);
      messages.innerHTML = "";
      messages.appendChild(createMessage(text, "user"));
      scrollMessages();
    }

    function answerIntent(intent) {
      setTimeout(() => addBotMessage(copy[language].answers[intent], true, true), 180);
    }

    function replyToIntent(intent, label) {
      addUserMessage(label);
      answerIntent(intent);
    }

    function setCopy() {
      language = getLanguage();
      const current = copy[language];
      root.querySelector(".chatbot-kicker").textContent = current.kicker;
      root.querySelector(".chatbot-title").textContent = current.title;
      root.querySelector(".chatbot-subtitle").textContent = current.subtitle;
      input.placeholder = current.placeholder;
      toggle.setAttribute("aria-label", current.open);
      close.setAttribute("aria-label", current.close);
      close.innerHTML = icons.close;
      root.querySelector(".chatbot-send").setAttribute("aria-label", current.send);

      contactRow.innerHTML = `
        <a class="chatbot-link" href="${mailto("call", language)}">${current.call}</a>
        <a class="chatbot-link" href="${mailto("email", language)}">${current.email}</a>
        <a class="chatbot-link" href="${LINKEDIN_URL}" target="_blank" rel="noopener">${current.linkedin}</a>
      `;

      if (messages.querySelector(".chatbot-suggestions")) {
        showSuggestions(true);
      }
    }

    function openChat() {
      panel.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasGreeted) {
        addBotMessage(copy[language].greeting, true);
        hasGreeted = true;
      }

      input.focus();
    }

    function closeChat() {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }

    toggle.addEventListener("click", () => {
      if (panel.classList.contains("open")) {
        closeChat();
      } else {
        setCopy();
        openChat();
      }
    });

    close.addEventListener("click", closeChat);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value) return;

      addUserMessage(value);
      input.value = "";
      answerIntent(detectIntent(value));
    });

    document.addEventListener("click", (event) => {
      const langButton = event.target.closest("#lang-en, #lang-de");
      if (!langButton) return;

      setTimeout(() => {
        setCopy();
        if (messages.children.length) {
          addBotMessage(copy[language].greeting, true);
        }
      }, 0);
    });

    setCopy();
    toggle.setAttribute("aria-expanded", "false");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderChatbot);
  } else {
    renderChatbot();
  }
})();
