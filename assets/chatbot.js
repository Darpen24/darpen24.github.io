(function () {
  const chips = [
    "Which projects show Data Engineering skills?",
    "Which projects show BI and Data Analyst skills?"
  ];

  const portfolioFacts = [
    {
      id: "experienceYears",
      keywords: ["experience", "years", "year", "exp", "how long", "career"],
      answer: "Darpen has 5 years of experience across data engineering, analytics engineering, BI reporting, healthcare IT analytics and financial services reporting."
    },
    {
      id: "dataEngineering",
      keywords: ["data engineering", "pipeline", "pipelines", "azure", "adf", "data factory", "adls", "data lake", "dbt", "etl", "elt", "api", "rest", "lakehouse", "medallion", "pyspark", "databricks", "delta", "parquet", "snowflake", "kafka", "airflow"],
      answer: "For Data Engineering, start with DB Train Delay, Smart Energy Forecasting and Electricity Insights. They show API ingestion, ETL/ELT, Azure data layers, dbt models, PySpark/Databricks concepts, data quality checks and reporting-ready datasets."
    },
    {
      id: "biAnalytics",
      keywords: ["bi", "business intelligence", "analyst", "data analyst", "dashboard", "dashboards", "power bi", "powerbi", "dax", "power query", "kpi", "reporting", "tableau", "excel", "visualization"],
      answer: "For BI and Data Analyst roles, start with Stroke Risk Analytics, Electricity Dashboard and Wine Quality Analysis. They show Power BI, DAX, Power Query, KPI dashboards, Streamlit charts, SQL analysis and stakeholder-facing reporting."
    },
    {
      id: "healthcare",
      keywords: ["healthcare", "hospital", "heidelberg", "universitatsklinikum", "universitaetsklinikum", "qtest", "matrix42", "sla", "incident", "service request", "test execution", "stroke", "patient"],
      answer: "Healthcare evidence: at Universitaetsklinikum Heidelberg, Darpen built qTest and Matrix42 REST API ingestion, SLA monitoring datasets, dbt reporting marts and Power BI-ready data. Stroke Risk Analytics is the main healthcare BI project."
    },
    {
      id: "finance",
      keywords: ["finance", "financial", "hexaware", "aum", "portfolio", "reconciliation", "performance", "sla reporting", "month end", "excel automation"],
      answer: "Finance evidence: at Hexaware, Darpen supported 22 financial portfolio applications across AUM reporting, performance tracking, reconciliation analysis, Excel automation, SQL/Python pipelines, Power BI reporting and Azure workflows."
    },
    {
      id: "skills",
      keywords: ["skill", "skills", "tech", "stack", "tools", "technology", "technologies"],
      answer: "Core stack: Python, SQL, REST APIs, Azure Data Factory, Azure Data Lake, Azure SQL, Databricks, PySpark, Delta Lake, Parquet, dbt, Power BI, DAX, Power Query, Tableau, Excel, Docker, Snowflake, Kafka and Airflow."
    },
    {
      id: "cv",
      keywords: ["cv", "resume", "curriculum", "profile"],
      answer: "Darpen has two CV views in the hero section: Data Engineering CV and BI / Data Analyst CV. German version is available on request."
    },
    {
      id: "contact",
      keywords: ["contact", "email", "linkedin", "github", "portfolio", "connect", "call", "interview"],
      answer: "Use the Contact section for email, LinkedIn, GitHub and portfolio links. The chatbot only answers portfolio questions."
    },
    {
      id: "dbTrain",
      keywords: ["db train", "train", "rail", "delay", "route", "reliability", "bahn", "cancellation"],
      answer: "DB Train Delay shows Data Engineering and Analytics Engineering: API ingestion, Bronze/Silver/Gold layers, PySpark transformations, dbt models, freshness checks and 11+ route reliability KPIs."
    },
    {
      id: "energy",
      keywords: ["energy", "electricity", "solar", "forecast", "forecasting", "renewable", "weather", "cost"],
      answer: "Energy projects show both pipeline and analytics work: electricity, solar, weather and cost datasets, dbt transformations, forecast metrics and dashboard-ready views supporting 12% potential energy savings analysis."
    }
  ];

  const fallback =
    "I can answer from Darpen's portfolio content. Try asking about years of experience, data engineering, Power BI, dbt, healthcare, finance, projects, skills or CV.";

  const icons = {
    chat:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.7 8.7 0 0 1-3.7-.8L3 21l1.8-5A8.4 8.4 0 0 1 3 11.5 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 9 8.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11h8M8 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 11.5 16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9+#.\s/-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function keywordScore(question, keywords) {
    return keywords.reduce((score, keyword) => {
      const term = normalize(keyword);
      if (!term) return score;
      if (question.includes(term)) return score + Math.max(2, term.split(" ").length + 1);
      const compactQuestion = question.replace(/\s+/g, "");
      const compactTerm = term.replace(/\s+/g, "");
      return compactQuestion.includes(compactTerm) ? score + 1 : score;
    }, 0);
  }

  function answerQuestion(message) {
    const question = normalize(message);

    if (/how many.*(year|experience|exp)|years.*experience|experience.*years|total.*experience/.test(question)) {
      return portfolioFacts.find((fact) => fact.id === "experienceYears").answer;
    }

    const ranked = portfolioFacts
      .map((fact) => ({ fact, score: keywordScore(question, fact.keywords) }))
      .sort((a, b) => b.score - a.score);

    return ranked[0].score > 0 ? ranked[0].fact.answer : fallback;
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
            <p class="chatbot-subtitle">Projects, skills and role fit only.</p>
          </div>
          <button class="chatbot-close" type="button" aria-label="Close chat">${icons.close}</button>
        </header>
        <div class="chatbot-messages" aria-live="polite"></div>
        <form class="chatbot-form">
          <input class="chatbot-input" type="text" autocomplete="off" placeholder="Ask about experience, dbt, Power BI..." />
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
      panel.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasGreeted) {
        messages.innerHTML = "";
        messages.appendChild(createMessage("Hi, I am Darpen's portfolio assistant. Ask me about his experience, projects, skills, healthcare, finance, dbt or Power BI.", "bot"));
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderChatbot);
  } else {
    renderChatbot();
  }
})();
