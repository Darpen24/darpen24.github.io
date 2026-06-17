(function () {
  const CONTACT_EMAIL = "darpen.bhandari@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/darpen-bhandari/";
  const DE_CV_URL = "./assets/Darpen-DE-CV.pdf?v=20260617";
  const BI_CV_URL = "./assets/Darpen-DA-CV.pdf?v=20260617";

  const chips = [
    "Which projects show Data Engineering skills?",
    "Which projects show BI and Data Analyst skills?"
  ];

  const answers = {
    dataEngineering:
      "Best evidence for Data Engineering: DB Train Delay, Smart Energy Forecasting and Electricity Insights. They show API ingestion, ETL/ELT, Bronze/Silver/Gold layers, dbt models, SQL/Python pipelines, data quality and reporting-ready datasets.",
    biAnalytics:
      "Best evidence for BI and Data Analyst roles: Stroke Risk Analytics, Electricity Dashboard and Wine Quality Analysis. They show Power BI, DAX, Power Query, KPI dashboards, SQL analysis, Streamlit charts, Excel-style reporting and clear business insights.",
    healthcare:
      "Healthcare fit: at Universitaetsklinikum Heidelberg, Darpen worked with qTest, Matrix42, SLA monitoring, reporting datasets, Power BI-ready data and data quality. The Stroke Risk Analytics Dashboard is the clearest healthcare BI project.",
    finance:
      "Finance fit: at Hexaware, Darpen supported portfolio applications across AUM reporting, performance tracking, reconciliation, SQL/Python pipelines, Excel automation, Power BI reporting and Azure data workflows.",
    resume:
      "There are two CV options: Data Engineering CV and BI / Data Analyst CV. German version is available on request.",
    contact:
      "Best next step: email Darpen, open LinkedIn to connect, or download the role-specific CV. This static site cannot send a silent LinkedIn alert, but the LinkedIn button opens his profile directly.",
    skills:
      "Core skills: Python, SQL, Azure Data Factory, Azure Data Lake, REST APIs, ETL/ELT, dbt, data modelling, data quality, KPI logic, Power BI, DAX, Power Query, Tableau and Excel.",
    fallback:
      "I can answer from Darpen's portfolio content around data engineering, analytics engineering, BI dashboards, healthcare IT analytics, finance reporting, CVs and contact options. Try asking about pipelines, Power BI, healthcare, finance or role fit."
  };

  const icons = {
    chat:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.7 8.7 0 0 1-3.7-.8L3 21l1.8-5A8.4 8.4 0 0 1 3 11.5 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 9 8.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11h8M8 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 11.5 16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };

  function mailto(subject, body) {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function detectIntent(message) {
    const text = message.toLowerCase();

    if (/cv|resume|curriculum|download/.test(text)) return "resume";
    if (/linkedin|connect|email|mail|call|interview|contact|reach/.test(text)) return "contact";
    if (/healthcare|hospital|heidelberg|stroke|qtest|matrix42|sla|patient/.test(text)) return "healthcare";
    if (/finance|financial|aum|reconciliation|portfolio|hexaware|performance|excel/.test(text)) return "finance";
    if (/bi|power bi|powerbi|dashboard|dax|kpi|analyst|reporting|tableau|power query|excel/.test(text)) return "biAnalytics";
    if (/data engineering|pipeline|azure|dbt|etl|elt|api|lakehouse|pyspark|data quality|adf|data lake/.test(text)) return "dataEngineering";
    if (/skill|tool|stack|technology|domain/.test(text)) return "skills";

    return "fallback";
  }

  function createMessage(text, type) {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    message.textContent = text;
    return message;
  }

  function createSuggestions(onSelect) {
    const suggestions = document.createElement("div");
    suggestions.className = "chatbot-suggestions";

    chips.forEach((label) => {
      const button = document.createElement("button");
      button.className = "chatbot-chip";
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => onSelect(label));
      suggestions.appendChild(button);
    });

    return suggestions;
  }

  function renderChatbot() {
    const root = document.createElement("div");
    root.className = "chatbot-root";
    root.innerHTML = `
      <section class="chatbot-panel" aria-label="Portfolio assistant">
        <header class="chatbot-header">
          <div>
            <p class="chatbot-kicker">// PORTFOLIO ASSISTANT</p>
            <h2 class="chatbot-title">Ask about Darpen</h2>
            <p class="chatbot-subtitle">Ask about my projects, skills or role fit.</p>
          </div>
          <button class="chatbot-close" type="button" aria-label="Close chat">${icons.close}</button>
        </header>
        <div class="chatbot-messages" aria-live="polite"></div>
        <div class="chatbot-contact-row">
          <a class="chatbot-link" href="${mailto("Call request from darpenbhandari.com", "Hi Darpen, I visited your portfolio and would like to schedule a call.")}">Request a call</a>
          <a class="chatbot-link" href="${LINKEDIN_URL}" target="_blank" rel="noopener">LinkedIn</a>
          <a class="chatbot-link" href="${DE_CV_URL}" download="Darpen_Bhandari_Data_Engineering_CV.pdf">Data Eng CV</a>
          <a class="chatbot-link" href="${BI_CV_URL}" download="Darpen_Bhandari_BI_Data_Analyst_CV.pdf">BI / DA CV</a>
        </div>
        <form class="chatbot-form">
          <input class="chatbot-input" type="text" autocomplete="off" placeholder="Ask about projects, Power BI, dbt..." />
          <button class="chatbot-send" type="submit" aria-label="Send message">${icons.send}</button>
        </form>
      </section>
      <button class="chatbot-toggle" type="button" aria-label="Open chat" aria-expanded="false">${icons.chat}</button>
    `;

    document.body.appendChild(root);

    const panel = root.querySelector(".chatbot-panel");
    const toggle = root.querySelector(".chatbot-toggle");
    const close = root.querySelector(".chatbot-close");
    const messages = root.querySelector(".chatbot-messages");
    const form = root.querySelector(".chatbot-form");
    const input = root.querySelector(".chatbot-input");
    let hasGreeted = false;

    function scrollMessages() {
      messages.scrollTop = messages.scrollHeight;
    }

    function renderSuggestions() {
      messages.appendChild(createSuggestions((label) => {
        submitQuestion(label);
      }));
      scrollMessages();
    }

    function showAnswer(question) {
      messages.innerHTML = "";
      messages.appendChild(createMessage(question, "user"));
      messages.appendChild(createMessage(answers[detectIntent(question)], "bot"));
      renderSuggestions();
    }

    function submitQuestion(question) {
      if (!question) return;
      showAnswer(question);
      input.value = "";
      input.focus();
    }

    function openChat() {
      panel.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasGreeted) {
        messages.innerHTML = "";
        messages.appendChild(createMessage("Hi, I am Darpen's portfolio assistant. I can route you to the strongest Data Engineering, Analytics Engineering and BI evidence on this site.", "bot"));
        renderSuggestions();
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
        openChat();
      }
    });

    close.addEventListener("click", closeChat);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitQuestion(input.value.trim());
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderChatbot);
  } else {
    renderChatbot();
  }
})();
