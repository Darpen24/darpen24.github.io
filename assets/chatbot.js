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
      placeholder: "Ask about skills, projects, experience...",
      call: "Request a call",
      email: "Email Darpen",
      linkedin: "LinkedIn",
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
          "His core stack includes Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, REST APIs, Azure DevOps, Power BI, DAX, Power Query and data modeling.",
        contact:
          "The best next step is to request a call or send an email. I can prepare a prefilled message so it is quick to start the conversation.",
        fallback:
          "Good question. I can help with roles, experience, projects, skills or contact details. For anything specific, email Darpen and he can reply directly."
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
      placeholder: "Fragen zu Kenntnissen, Projekten, Erfahrung...",
      call: "Call anfragen",
      email: "E-Mail senden",
      linkedin: "LinkedIn",
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
          "Sein Kernstack umfasst Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, REST APIs, Azure DevOps, Power BI, DAX, Power Query und Datenmodellierung.",
        contact:
          "Der beste naechste Schritt ist eine Call-Anfrage oder eine E-Mail. Ich kann direkt eine vorbereitete Nachricht oeffnen.",
        fallback:
          "Gute Frage. Ich kann bei Rollen, Erfahrung, Projekten, Kenntnissen oder Kontakt helfen. Fuer sehr spezifische Themen schreiben Sie Darpen am besten direkt per E-Mail."
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

    if (/call|meet|interview|phone|kontakt|termin|anruf|gespraech/.test(text)) {
      return "contact";
    }

    if (/role|open|available|availability|job|position|rolle|verfuegbar|verfugbar/.test(text)) {
      return "availability";
    }

    if (/experience|work|years|finance|healthcare|erfahrung|beruf/.test(text)) {
      return "experience";
    }

    if (/project|portfolio|dashboard|optimizer|power bi|projekt/.test(text)) {
      return "projects";
    }

    if (/skill|stack|tech|tools|python|sql|azure|kenntnis|faehigkeit|fahigkeit/.test(text)) {
      return "skills";
    }

    return "fallback";
  }

  function createMessage(text, type) {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    message.textContent = text;
    return message;
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
        <div class="chatbot-actions"></div>
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
    const actions = root.querySelector(".chatbot-actions");
    const contactRow = root.querySelector(".chatbot-contact-row");
    const form = root.querySelector(".chatbot-form");
    const input = root.querySelector(".chatbot-input");
    let language = getLanguage();
    let hasGreeted = false;

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

      actions.innerHTML = "";
      current.chips.forEach((chip) => {
        const button = document.createElement("button");
        button.className = "chatbot-chip";
        button.type = "button";
        button.textContent = chip.label;
        button.addEventListener("click", () => replyToIntent(chip.intent, chip.label));
        actions.appendChild(button);
      });

      contactRow.innerHTML = `
        <a class="chatbot-link" href="${mailto("call", language)}">${current.call}</a>
        <a class="chatbot-link" href="${mailto("email", language)}">${current.email}</a>
      `;
    }

    function addBotMessage(text) {
      messages.appendChild(createMessage(text, "bot"));
      messages.scrollTop = messages.scrollHeight;
    }

    function addUserMessage(text) {
      messages.appendChild(createMessage(text, "user"));
      messages.scrollTop = messages.scrollHeight;
    }

    function replyToIntent(intent, label) {
      addUserMessage(label);
      setTimeout(() => addBotMessage(copy[language].answers[intent]), 160);
    }

    function openChat() {
      panel.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasGreeted) {
        addBotMessage(copy[language].greeting);
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

      const intent = detectIntent(value);
      setTimeout(() => addBotMessage(copy[language].answers[intent]), 180);
    });

    document.addEventListener("click", (event) => {
      const langButton = event.target.closest("#lang-en, #lang-de");
      if (!langButton) return;

      setTimeout(() => {
        setCopy();
        if (messages.children.length) {
          addBotMessage(copy[language].greeting);
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
