(function () {
  const ui = {
    en: {
      title: "Ask about Darpen",
      subtitle: "Profile, projects, skills and role fit.",
      placeholder: "Ask about experience, dbt, Power BI...",
      greeting:
        "Hi, I am Darpen's portfolio assistant. Ask me about his experience, CV, projects, GitHub, LinkedIn, skills, healthcare, finance, dbt or Power BI.",
      chips: [
        "How many years of experience does he have?",
        "Which projects show Data Engineering skills?",
        "Which projects show BI and Data Analyst skills?"
      ]
    },
    de: {
      title: "Frag zu Darpen",
      subtitle: "Profil, Projekte, Skills und Rollen-Fit.",
      placeholder: "Frag zu Erfahrung, dbt, Power BI...",
      greeting:
        "Hallo, ich bin Darpens Portfolio-Assistent. Frag mich zu Erfahrung, CV, Projekten, GitHub, LinkedIn, Skills, Healthcare, Finance, dbt oder Power BI.",
      chips: [
        "Wie viele Jahre Erfahrung hat er?",
        "Welche Projekte zeigen Data-Engineering-Skills?",
        "Welche Projekte zeigen BI- und Data-Analyst-Skills?"
      ]
    }
  };

  const facts = [
    {
      id: "experienceYears",
      keywords: ["experience", "years", "year", "exp", "how long", "career", "erfahrung", "jahre", "wieviel", "wie viele"],
      en: "Darpen has 5 years of experience across Data Engineering, Analytics Engineering, BI reporting, Healthcare IT Analytics and Financial Services Reporting.",
      de: "Darpen hat 5 Jahre Erfahrung in Data Engineering, Analytics Engineering, BI Reporting, Healthcare IT Analytics und Financial Services Reporting."
    },
    {
      id: "positioning",
      keywords: ["who", "profile", "summary", "about", "role", "positioning", "profil", "zusammenfassung", "rolle"],
      en: "Darpen is positioned as a Data Engineer and Analytics Engineer with strong BI reporting experience. His strongest evidence combines Azure/ADF pipelines, dbt reporting marts, Power BI/DAX dashboards, healthcare IT data and financial reporting.",
      de: "Darpen ist als Data Engineer und Analytics Engineer mit starker BI-Reporting-Erfahrung positioniert. Die stärksten Nachweise sind Azure/ADF-Pipelines, dbt-Reporting-Marts, Power-BI/DAX-Dashboards, Healthcare-IT-Daten und Finance Reporting."
    },
    {
      id: "dataEngineering",
      keywords: ["data engineering", "pipeline", "pipelines", "azure", "adf", "data factory", "adls", "data lake", "dbt", "etl", "elt", "api", "rest", "lakehouse", "medallion", "pyspark", "databricks", "delta", "parquet", "snowflake", "kafka", "airflow", "datenpipeline", "datenpipelines"],
      en: "Data Engineering proof: DB Train Delay, Smart Energy Forecasting and Electricity Insights. They show REST/API ingestion, ETL/ELT, Azure-style data layers, dbt models, PySpark/Databricks concepts, medallion architecture, Parquet, data quality and reporting-ready datasets.",
      de: "Data-Engineering-Nachweis: DB Train Delay, Smart Energy Forecasting und Electricity Insights. Diese Projekte zeigen REST/API-Ingestion, ETL/ELT, Azure-nahe Datenlayer, dbt-Modelle, PySpark/Databricks-Konzepte, Medallion Architecture, Parquet, Datenqualität und reportingfähige Datensätze."
    },
    {
      id: "biAnalytics",
      keywords: ["bi", "business intelligence", "analyst", "data analyst", "dashboard", "dashboards", "power bi", "powerbi", "dax", "power query", "kpi", "reporting", "tableau", "excel", "visualization", "visualisierung", "bericht"],
      en: "BI/Data Analyst proof: Stroke Risk Analytics, Electricity Dashboard and Wine Quality Analysis. They show Power BI, DAX, Power Query, KPI dashboards, SQL analysis, Streamlit charts, Excel-style reporting and stakeholder-facing insights.",
      de: "BI/Data-Analyst-Nachweis: Stroke Risk Analytics, Electricity Dashboard und Wine Quality Analysis. Sie zeigen Power BI, DAX, Power Query, KPI-Dashboards, SQL-Analyse, Streamlit-Charts, Excel-nahes Reporting und stakeholderorientierte Insights."
    },
    {
      id: "healthcare",
      keywords: ["healthcare", "hospital", "heidelberg", "universitatsklinikum", "universitaetsklinikum", "qtest", "matrix42", "sla", "incident", "service request", "test execution", "stroke", "patient", "krankenhaus", "gesundheit"],
      en: "Healthcare evidence: at Universitaetsklinikum Heidelberg, Darpen built qTest and Matrix42 REST API ingestion, SLA monitoring datasets, dbt reporting marts, SQL validations and Power BI-ready reporting layers. Stroke Risk Analytics is the main healthcare BI project.",
      de: "Healthcare-Nachweis: Am Universitätsklinikum Heidelberg baute Darpen qTest- und Matrix42-REST-API-Ingestion, SLA-Monitoring-Datensätze, dbt-Reporting-Marts, SQL-Validierungen und Power-BI-fähige Reporting-Layer. Stroke Risk Analytics ist das wichtigste Healthcare-BI-Projekt."
    },
    {
      id: "finance",
      keywords: ["finance", "financial", "hexaware", "aum", "portfolio", "reconciliation", "performance", "sla reporting", "month end", "excel automation", "finanzen", "abstimmung"],
      en: "Finance evidence: at Hexaware, Darpen supported 22 financial portfolio applications across AUM reporting, performance tracking, reconciliation analysis, Excel automation, SQL/Python pipelines, Power BI reporting, Azure workflows and SLA compliance.",
      de: "Finance-Nachweis: Bei Hexaware unterstützte Darpen 22 Finanzportfolio-Anwendungen mit AUM Reporting, Performance Tracking, Reconciliation Analysis, Excel-Automatisierung, SQL/Python-Pipelines, Power BI Reporting, Azure Workflows und SLA Compliance."
    },
    {
      id: "skills",
      keywords: ["skill", "skills", "tech", "stack", "tools", "technology", "technologies", "kenntnisse", "fähigkeiten", "faehigkeiten"],
      en: "Core stack: Python, SQL, REST APIs, Azure Data Factory, Azure Data Lake, Azure SQL, Databricks, PySpark, Delta Lake, Parquet, dbt, Power BI, DAX, Power Query, Tableau, Excel, Docker, Snowflake, Kafka and Airflow.",
      de: "Core Stack: Python, SQL, REST APIs, Azure Data Factory, Azure Data Lake, Azure SQL, Databricks, PySpark, Delta Lake, Parquet, dbt, Power BI, DAX, Power Query, Tableau, Excel, Docker, Snowflake, Kafka und Airflow."
    },
    {
      id: "softSkills",
      keywords: ["soft", "communication", "stakeholder", "leadership", "team", "ownership", "problem", "soft skills", "kommunikation", "führung", "fuehrung"],
      en: "Soft skills: stakeholder communication, business requirement analysis, problem solving, ownership, delivery focus, team leadership and coordination.",
      de: "Soft Skills: Stakeholder-Kommunikation, Business Requirement Analysis, Problem Solving, Ownership, Delivery-Fokus, Team Leadership und Koordination."
    },
    {
      id: "education",
      keywords: ["education", "degree", "master", "msc", "srh", "study", "university", "ausbildung", "studium"],
      en: "Darpen has an M.Sc. in Applied Data Science and Analytics from SRH Hochschule Heidelberg, completed in September 2025. His master's thesis focused on a Smart Energy Forecasting Pipeline.",
      de: "Darpen hat einen M.Sc. in Applied Data Science and Analytics von der SRH Hochschule Heidelberg, abgeschlossen im September 2025. Seine Masterarbeit fokussierte sich auf eine Smart Energy Forecasting Pipeline."
    },
    {
      id: "certificates",
      keywords: ["certificate", "certification", "az-900", "azure fundamentals", "databricks", "nvidia", "zertifikat"],
      en: "Certificates listed on the CV: Microsoft Azure Fundamentals (AZ-900), Databricks for Data Engineering and NVIDIA Deep Learning Fundamentals.",
      de: "Zertifikate aus dem CV: Microsoft Azure Fundamentals (AZ-900), Databricks for Data Engineering und NVIDIA Deep Learning Fundamentals."
    },
    {
      id: "languages",
      keywords: ["language", "languages", "english", "german", "deutsch", "englisch", "sprache", "sprachen"],
      en: "Languages: English C1 professional working proficiency and German B1, actively improving toward B2.",
      de: "Sprachen: Englisch C1 auf professionellem Arbeitsniveau und Deutsch B1, aktiv mit Ziel B2."
    },
    {
      id: "cv",
      keywords: ["cv", "resume", "curriculum", "profile", "lebenslauf"],
      en: "Darpen has two CV views in the hero section: Data Engineering CV and BI / Data Analyst CV. A German version is available on request.",
      de: "Im Hero-Bereich gibt es zwei CV-Ansichten: Data Engineering CV und BI / Data Analyst CV. Eine deutsche Version ist auf Anfrage verfügbar."
    },
    {
      id: "github",
      keywords: ["github", "repo", "repository", "code", "source", "readme"],
      en: "Darpen's GitHub is linked in the Contact section. Key repositories shown in the portfolio include DB-Train-Delay, Electricity_insights, Stroke-Risk, Wine_Quality_Analysis and CV-Optimizer.",
      de: "Darpens GitHub ist im Kontaktbereich verlinkt. Wichtige Repositories im Portfolio sind DB-Train-Delay, Electricity_insights, Stroke-Risk, Wine_Quality_Analysis und CV-Optimizer."
    },
    {
      id: "linkedin",
      keywords: ["linkedin", "connect", "contact", "email", "mail", "kontakt", "vernetzen"],
      en: "Darpen's LinkedIn, email, GitHub and portfolio links are in the Contact section. The chatbot does not send messages, but it can guide visitors to the right profile evidence.",
      de: "Darpens LinkedIn, E-Mail, GitHub und Portfolio sind im Kontaktbereich verlinkt. Der Chatbot sendet keine Nachrichten, kann Besucher aber zu den passenden Profilnachweisen führen."
    },
    {
      id: "dbTrain",
      keywords: ["db train", "train", "rail", "delay", "route", "reliability", "bahn", "zug", "verspätung", "verspaetung", "cancellation"],
      en: "DB Train Delay shows Data Engineering and Analytics Engineering: API ingestion, Bronze/Silver/Gold layers, PySpark transformations, dbt models, freshness checks and 11+ route reliability KPIs.",
      de: "DB Train Delay zeigt Data Engineering und Analytics Engineering: API-Ingestion, Bronze/Silver/Gold-Layer, PySpark-Transformationen, dbt-Modelle, Freshness Checks und 11+ Route-Reliability-KPIs."
    },
    {
      id: "energy",
      keywords: ["energy", "electricity", "solar", "forecast", "forecasting", "renewable", "weather", "cost", "energie", "strom"],
      en: "Energy projects show both pipeline and analytics work: electricity, solar, weather and cost datasets, dbt transformations, forecast metrics and dashboard-ready views supporting 12% potential energy savings analysis.",
      de: "Die Energieprojekte zeigen Pipeline- und Analytics-Arbeit: Strom-, Solar-, Wetter- und Kostendaten, dbt-Transformationen, Forecast-Metriken und dashboardfähige Views für eine Analyse von 12% potenzieller Energieeinsparung."
    }
  ];

  const icons = {
    chat:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.7 8.7 0 0 1-3.7-.8L3 21l1.8-5A8.4 8.4 0 0 1 3 11.5 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 9 8.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11h8M8 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 11.5 16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };

  function currentLanguage() {
    return localStorage.getItem("portfolioLanguageV2") === "en" ? "en" : "de";
  }

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9+#.\s/-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function keywordScore(question, keywords) {
    return keywords.reduce((score, keyword) => {
      const term = normalize(keyword);
      if (!term) return score;
      if (question.includes(term)) return score + Math.max(2, term.split(" ").length + 1);
      return question.replace(/\s+/g, "").includes(term.replace(/\s+/g, "")) ? score + 1 : score;
    }, 0);
  }

  function answerQuestion(message) {
    const lang = currentLanguage();
    const question = normalize(message);

    if (/how many.*(year|experience|exp)|years.*experience|experience.*years|total.*experience|wie viele.*(jahr|erfahrung)|wieviel.*(jahr|erfahrung)/.test(question)) {
      return facts.find((fact) => fact.id === "experienceYears")[lang];
    }

    if (question.includes("github") && question.includes("linkedin")) {
      return lang === "de"
        ? "Darpens GitHub und LinkedIn sind im Kontaktbereich verlinkt. Wichtige GitHub-Repositories im Portfolio sind DB-Train-Delay, Electricity_insights, Stroke-Risk, Wine_Quality_Analysis und CV-Optimizer."
        : "Darpen's GitHub and LinkedIn are linked in the Contact section. Key GitHub repositories shown in the portfolio are DB-Train-Delay, Electricity_insights, Stroke-Risk, Wine_Quality_Analysis and CV-Optimizer.";
    }

    const ranked = facts
      .map((fact) => ({ fact, score: keywordScore(question, fact.keywords) }))
      .sort((a, b) => b.score - a.score);

    if (ranked[0].score > 0) return ranked[0].fact[lang];

    return lang === "de"
      ? "Ich kann Fragen zu Darpens CV, Projekten, GitHub, LinkedIn, Skills, Erfahrung, Healthcare, Finance, dbt, Azure und Power BI beantworten."
      : "I can answer questions about Darpen's CV, projects, GitHub, LinkedIn, skills, experience, healthcare, finance, dbt, Azure and Power BI.";
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

    ui[currentLanguage()].chips.forEach((label) => {
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
            <h2 class="chatbot-title"></h2>
            <p class="chatbot-subtitle"></p>
          </div>
          <button class="chatbot-close" type="button" aria-label="Close chat">${icons.close}</button>
        </header>
        <div class="chatbot-messages" aria-live="polite"></div>
        <form class="chatbot-form">
          <input class="chatbot-input" type="text" autocomplete="off" />
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
    const title = root.querySelector(".chatbot-title");
    const subtitle = root.querySelector(".chatbot-subtitle");
    let hasGreeted = false;

    function applyChatLanguage() {
      const current = ui[currentLanguage()];
      title.textContent = current.title;
      subtitle.textContent = current.subtitle;
      input.placeholder = current.placeholder;
    }

    function scrollMessages() {
      messages.scrollTop = messages.scrollHeight;
    }

    function renderSuggestions() {
      messages.querySelectorAll(".chatbot-suggestions").forEach((node) => node.remove());
      messages.appendChild(createSuggestions((label) => submitQuestion(label)));
      scrollMessages();
    }

    function submitQuestion(question) {
      if (!question) return;
      messages.innerHTML = "";
      messages.appendChild(createMessage(question, "user"));
      messages.appendChild(createMessage(answerQuestion(question), "bot"));
      renderSuggestions();
      input.value = "";
      input.focus();
    }

    function openChat() {
      applyChatLanguage();
      panel.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasGreeted) {
        messages.innerHTML = "";
        messages.appendChild(createMessage(ui[currentLanguage()].greeting, "bot"));
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
      if (panel.classList.contains("open")) closeChat();
      else openChat();
    });

    close.addEventListener("click", closeChat);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitQuestion(input.value.trim());
    });

    window.addEventListener("portfolioLanguageChanged", () => {
      applyChatLanguage();
      if (messages.querySelector(".chatbot-suggestions")) renderSuggestions();
    });

    applyChatLanguage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderChatbot);
  } else {
    renderChatbot();
  }
})();
