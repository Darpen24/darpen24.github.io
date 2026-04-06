document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      nav_about: "About",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_value: "Value",
      nav_contact: "Contact",
      nav_all_projects: "All Projects",
      nav_home: "Home",

      hero_tagline: "Data Engineer • Analytics • BI",
      hero_desc:
        "Data Engineer with 4.9 years of experience building ETL and ELT pipelines, scalable data workflows and decision-ready analytics solutions using Python, SQL, Azure, BigQuery, Spark and Power BI.",
      hero_btn_projects: "View Projects",
      hero_btn_contact: "Contact Me",
      hero_btn_resume: "Resume",
      hero_btn_resume_en: "English CV",
      hero_btn_resume_de: "German CV",
      stat_experience: "Years Experience",
      stat_apps: "Enterprise Data Workflows Supported",
      stat_reporting: "Less Manual Reporting",

      about_title: "Who I Am",
      about_text:
        "I am a Data Engineer with experience across healthcare, financial services and applied data science projects. I build ETL and ELT pipelines, automate reporting workflows and develop reliable analytics solutions that help stakeholders make better decisions. My work combines Python, SQL, Azure, BigQuery, Spark, dbt and Power BI to turn complex raw data into structured, scalable and business-ready outputs.",

      experience_title: "Professional Experience",

      exp1_1:
        "Built ETL and ELT workflows and dashboarding solutions for operational application data using Python, SQL, Azure Data Factory, Azure Storage and Power BI.",
      exp1_2:
        "Improved reporting visibility across IT services and supported a 15 percent reduction in manual reporting effort through structured workflows and dashboards.",
      exp1_3:
        "Designed incident analytics dashboards to track open versus resolved cases, recurring service issues and application demand trends.",
      exp1_4:
        "Supported better SLA monitoring and follow up on support requests by turning operational data into decision-ready insights.",

      exp2_1:
        "Led data delivery for 22 financial applications by building automated ETL pipelines using Azure Data Factory, Azure SQL, Azure Storage and Data Lake.",
      exp2_2:
        "Implemented data validation checks and CI/CD-supported workflows to improve data accessibility and reduce manual effort by 10 percent.",
      exp2_3:
        "Designed scalable transformation logic and reporting layers for financial application data across Azure-based storage systems.",
      exp2_4:
        "Improved dashboard delivery and business visibility, supporting a 5 percent uplift in revenue-driven decision outcomes across US operations.",

      featured_title: "Featured Project",
      view_more_projects: "View More Projects",

      stroke_title: "Stroke Risk Analytics Dashboard",
      stroke_featured_desc:
        "Interactive Power BI dashboard built on a healthcare dataset of 5,110 patients to analyze stroke risk indicators through KPI tracking, demographic filtering and risk-focused visual analysis.",

      what_built_title: "What I built",
      stroke_built:
        "I designed a dashboard with KPI cards, age analysis, BMI category views, smoking-status breakdowns and health-risk comparisons to make patient-level insights easier to understand.",

      why_matters_title: "Why it matters",
      stroke_impact:
        "The dashboard helps highlight how stroke prevalence relates to age, hypertension, heart disease, BMI and glucose patterns, turning healthcare data into a more actionable reporting view.",

      skills_title: "Skill Levels",
      level_advanced: "Advanced",
      level_strong: "Strong",
      level_working: "Working",
      level_fluent: "Fluent",
      level_intermediate: "Intermediate",
      level_native: "Native",

      value_title: "What I Bring",
      strength1_title: "Data Engineering Strength",
      strength1_text:
        "I build structured and scalable ETL and ELT workflows that improve data reliability, reduce manual effort and support decision-ready reporting.",
      strength2_title: "Analytics and BI Strength",
      strength2_text:
        "I translate business and operational needs into clear dashboards, KPIs and analytical views that help stakeholders act faster and with more confidence.",

      contact_title: "Get in Touch",
      contact_text:
        "Open to opportunities in Data Engineering, Analytics Engineering, BI and Reporting across Germany and Europe.",

      projects_title: "All Projects",
      projects_intro:
        "A selected collection of dashboards, analytics workflows and machine learning projects across Power BI, Streamlit, forecasting and end-to-end data solutions.",

      stroke_desc:
        "Built an interactive healthcare dashboard on a dataset of 5,110 patients to analyze stroke risk indicators through KPI tracking, demographic filtering and risk-focused visual analysis.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Built a CV optimization tool that compares a resume against a job description, improves summary wording and identifies missing skills using a local LLM workflow with Streamlit.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Performed exploratory data analysis on Portuguese wine datasets using cleaning, wrangling and visualization to study how chemical properties relate to wine quality.",

      electricity_title: "Electricity Insights",
      electricity_desc:
        "Developed an end-to-end electricity and renewable energy analytics solution with forecasting, model comparison and database integration for energy usage analysis.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Designed a predictive monitoring workflow for lake levels, trophic conditions and water quality indicators using environmental and meteorological data.",

      highlights_title: "Project Highlights",
      highlight_1:
        "Stroke Risk Analytics Dashboard: Built an interactive Power BI dashboard with KPI cards, filters and demographic analysis to make healthcare risk patterns easier to interpret and report.",
      highlight_2:
        "CV Optimizer: Developed a Streamlit-based application that aligns CVs with job descriptions using local LLM processing and generates stronger summaries and missing skill suggestions.",
      highlight_3:
        "Wine Quality Analysis: Conducted exploratory analysis and visualization to identify how wine chemistry influences expert-rated quality across red and white wine datasets.",
      highlight_4:
        "Electricity Insights: Built an energy analytics solution with XGBoost and LSTM models, database integration and model comparison to support electricity usage prediction and renewable energy analysis.",
      highlight_5:
        "Lake Monitoring and Quality Analysis: Applied data integration, environmental analysis and predictive reporting concepts to build reusable analytical workflows for lake quality monitoring."
    },

    de: {
      nav_about: "Über mich",
      nav_experience: "Erfahrung",
      nav_projects: "Projekte",
      nav_skills: "Kenntnisse",
      nav_value: "Mehrwert",
      nav_contact: "Kontakt",
      nav_all_projects: "Alle Projekte",
      nav_home: "Startseite",

      hero_tagline: "Data Engineer • Analytics • BI",
      hero_desc:
        "Data Engineer mit 4,9 Jahren Erfahrung im Aufbau von ETL- und ELT-Pipelines, skalierbaren Datenworkflows und entscheidungsreifen Analyselösungen mit Python, SQL, Azure, BigQuery, Spark und Power BI.",
      hero_btn_projects: "Projekte ansehen",
      hero_btn_contact: "Kontakt",
      hero_btn_resume: "Lebenslauf",
      hero_btn_resume_en: "Englischer CV",
      hero_btn_resume_de: "Deutscher Lebenslauf",
      stat_experience: "Jahre Erfahrung",
      stat_apps: "Unterstützte Enterprise-Datenworkflows",
      stat_reporting: "Weniger manueller Reporting-Aufwand",

      about_title: "Wer ich bin",
      about_text:
        "Ich bin Data Engineer mit Erfahrung in den Bereichen Gesundheitswesen, Finanzdienstleistungen und angewandte Data-Science-Projekte. Ich entwickle ETL- und ELT-Pipelines, automatisiere Reporting-Workflows und baue zuverlässige Analyselösungen, die Stakeholdern helfen, bessere Entscheidungen zu treffen. Meine Arbeit verbindet Python, SQL, Azure, BigQuery, Spark, dbt und Power BI, um komplexe Rohdaten in strukturierte, skalierbare und geschäftsreife Ergebnisse umzuwandeln.",

      experience_title: "Berufserfahrung",

      exp1_1:
        "Entwicklung von ETL- und ELT-Workflows sowie Dashboard-Lösungen für operative Anwendungsdaten mit Python, SQL, Azure Data Factory, Azure Storage und Power BI.",
      exp1_2:
        "Verbesserung der Reporting-Transparenz im IT-Servicebereich und Unterstützung einer Reduzierung des manuellen Reporting-Aufwands um 15 Prozent durch strukturierte Workflows und Dashboards.",
      exp1_3:
        "Entwurf von Incident-Analytics-Dashboards zur Verfolgung offener und gelöster Fälle, wiederkehrender Serviceprobleme und Anfragetrends.",
      exp1_4:
        "Unterstützung eines besseren SLA-Monitorings und der Nachverfolgung von Supportanfragen durch entscheidungsreife Datenanalysen.",

      exp2_1:
        "Leitung der Datenbereitstellung für 22 Finanzanwendungen durch den Aufbau automatisierter ETL-Pipelines mit Azure Data Factory, Azure SQL, Azure Storage und Data Lake.",
      exp2_2:
        "Implementierung von Datenvalidierungen und CI/CD-gestützten Workflows zur Verbesserung der Datenverfügbarkeit und Reduzierung manueller Arbeit um 10 Prozent.",
      exp2_3:
        "Entwurf skalierbarer Transformationslogik und Reporting-Layer für Finanzanwendungsdaten auf Azure-basierten Speichersystemen.",
      exp2_4:
        "Verbesserung der Dashboard-Bereitstellung und Geschäftstransparenz mit Unterstützung eines Umsatzanstiegs von 5 Prozent bei datenbasierten Entscheidungen in den US-Operationen.",

      featured_title: "Ausgewähltes Projekt",
      view_more_projects: "Mehr Projekte ansehen",

      stroke_title: "Stroke Risk Analytics Dashboard",
      stroke_featured_desc:
        "Interaktives Power-BI-Dashboard auf Basis eines Gesundheitsdatensatzes mit 5.110 Patientinnen und Patienten zur Analyse von Schlaganfall-Risikofaktoren durch KPI-Tracking, demografische Filter und risikoorientierte Visualisierungen.",

      what_built_title: "Was ich entwickelt habe",
      stroke_built:
        "Ich habe ein Dashboard mit KPI-Karten, Altersanalysen, BMI-Kategorien, Auswertungen zum Rauchstatus und Gesundheitsrisikovergleichen entwickelt, um patientenbezogene Erkenntnisse verständlicher darzustellen.",

      why_matters_title: "Warum es wichtig ist",
      stroke_impact:
        "Das Dashboard zeigt, wie Schlaganfallhäufigkeit mit Alter, Bluthochdruck, Herzerkrankungen, BMI und Glukosewerten zusammenhängt und macht Gesundheitsdaten besser nutzbar für Analysen und Reporting.",

      skills_title: "Kenntnisstand",
      level_advanced: "Fortgeschritten",
      level_strong: "Stark",
      level_working: "Praxiskenntnisse",
      level_fluent: "Fließend",
      level_intermediate: "Mittelstufe",
      level_native: "Muttersprache",

      value_title: "Was ich einbringe",
      strength1_title: "Stärke im Data Engineering",
      strength1_text:
        "Ich entwickle strukturierte und skalierbare ETL- und ELT-Workflows, die die Datenqualität verbessern, manuellen Aufwand reduzieren und entscheidungsreifes Reporting unterstützen.",
      strength2_title: "Stärke in Analytics und BI",
      strength2_text:
        "Ich übersetze geschäftliche und operative Anforderungen in klare Dashboards, KPIs und Analyseansichten, damit Stakeholder schneller und sicherer handeln können.",

      contact_title: "Kontakt",
      contact_text:
        "Offen für Möglichkeiten in Data Engineering, Analytics Engineering, BI und Reporting in Deutschland und Europa.",

      projects_title: "Alle Projekte",
      projects_intro:
        "Eine ausgewählte Sammlung von Dashboards, Analyse-Workflows und Machine-Learning-Projekten aus den Bereichen Power BI, Streamlit, Forecasting und End-to-End-Datenlösungen.",

      stroke_desc:
        "Entwicklung eines interaktiven Healthcare-Dashboards auf Basis eines Datensatzes mit 5.110 Patientinnen und Patienten zur Analyse von Schlaganfall-Risikofaktoren durch KPI-Tracking, demografische Filter und risikoorientierte Visualisierung.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Entwicklung eines Tools zur Optimierung von Lebensläufen, das einen CV mit einer Stellenbeschreibung vergleicht, Zusammenfassungen verbessert und fehlende Kompetenzen mithilfe eines lokalen LLM-Workflows mit Streamlit identifiziert.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Durchführung einer explorativen Datenanalyse auf portugiesischen Weindatensätzen mit Bereinigung, Aufbereitung und Visualisierung, um den Zusammenhang zwischen chemischen Eigenschaften und Weinqualität zu untersuchen.",

      electricity_title: "Electricity Insights",
      electricity_desc:
        "Entwicklung einer End-to-End-Analyseplattform für Strom- und erneuerbare Energiedaten mit Forecasting, Modellvergleich und Datenbankintegration zur Analyse des Energieverbrauchs.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Entwurf eines prädiktiven Monitoring-Workflows für Seepegel, trophische Bedingungen und Wasserqualitätsindikatoren auf Basis von Umwelt- und Wetterdaten.",

      highlights_title: "Projekt-Highlights",
      highlight_1:
        "Stroke Risk Analytics Dashboard: Entwicklung eines interaktiven Power-BI-Dashboards mit KPI-Karten, Filtern und demografischer Analyse, um Risikomuster im Gesundheitsbereich verständlicher darzustellen.",
      highlight_2:
        "CV Optimizer: Entwicklung einer Streamlit-Anwendung, die Lebensläufe mit Stellenbeschreibungen abgleicht, lokale LLM-Verarbeitung nutzt und stärkere Zusammenfassungen sowie fehlende Skills vorschlägt.",
      highlight_3:
        "Wine Quality Analysis: Durchführung explorativer Analysen und Visualisierungen, um zu verstehen, wie die Weinchemie die von Expertinnen und Experten bewertete Qualität beeinflusst.",
      highlight_4:
        "Electricity Insights: Entwicklung einer Energieanalyse-Lösung mit XGBoost- und LSTM-Modellen, Datenbankintegration und Modellvergleich zur Vorhersage des Stromverbrauchs und Analyse erneuerbarer Energien.",
      highlight_5:
        "Lake Monitoring and Quality Analysis: Anwendung von Datenintegration, Umweltanalyse und prädiktiven Reporting-Konzepten zum Aufbau wiederverwendbarer Analyse-Workflows für die Überwachung der Wasserqualität."
    }
  };

  const typingRoles = {
    en: [
      "Data Engineer",
      "Analytics Engineer",
      "BI Developer",
      "Power BI Developer",
      "ETL Pipeline Builder"
    ],
    de: [
      "Data Engineer",
      "Analytics Engineer",
      "BI Entwickler",
      "Power BI Entwickler",
      "ETL-Pipeline Entwickler"
    ]
  };

  const langEnBtn = document.getElementById("lang-en");
  const langDeBtn = document.getElementById("lang-de");
  const typingElement = document.getElementById("typing-text");

  let currentLang = localStorage.getItem("portfolioLanguage") || "de";
  let typingTimeout;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.documentElement.lang = lang;

    const isProjectsPage = window.location.pathname.includes("projects.html");
    if (isProjectsPage) {
      document.title =
        lang === "de" ? "Projekte | Darpen Bhandari" : "Projects | Darpen Bhandari";
    } else {
      document.title =
        lang === "de"
          ? "Darpen Bhandari | Data Engineer Portfolio"
          : "Darpen Bhandari | Data Engineer Portfolio";
    }
  }

  function setActiveLanguageButton(lang) {
    if (!langEnBtn || !langDeBtn) return;

    if (lang === "en") {
      langEnBtn.classList.add("active");
      langDeBtn.classList.remove("active");
    } else {
      langDeBtn.classList.add("active");
      langEnBtn.classList.remove("active");
    }
  }

  function resetTypingAnimation() {
    clearTimeout(typingTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;

    if (typingElement) {
      typingElement.textContent = "";
      startTyping();
    }
  }

  function startTyping() {
    if (!typingElement) return;

    const roles = typingRoles[currentLang];
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        typingTimeout = setTimeout(startTyping, 1400);
        return;
      }

      typingTimeout = setTimeout(startTyping, 90);
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingTimeout = setTimeout(startTyping, 250);
        return;
      }

      typingTimeout = setTimeout(startTyping, 45);
    }
  }

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolioLanguage", lang);
    applyTranslations(lang);
    setActiveLanguageButton(lang);
    resetTypingAnimation();
  }

  const resumeToggle = document.getElementById("resume-toggle");
  const resumeMenu = document.getElementById("resume-menu");

  if (resumeToggle && resumeMenu) {
    resumeToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      resumeMenu.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
      if (!resumeToggle.contains(event.target) && !resumeMenu.contains(event.target)) {
        resumeMenu.classList.remove("show");
      }
    });
  }

  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => switchLanguage("en"));
  }

  if (langDeBtn) {
    langDeBtn.addEventListener("click", () => switchLanguage("de"));
  }

  applyTranslations(currentLang);
  setActiveLanguageButton(currentLang);

  if (typingElement) {
    startTyping();
  }
});
