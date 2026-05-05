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

      hero_tagline: "Azure Data Engineer • ETL/ELT • BI Reporting Layer",
      hero_desc:
        "Data Engineer with 5 years of experience building ETL and ELT pipelines, REST API integrations and Azure-based data workflows using Python, SQL, Azure Data Factory, Azure Data Lake, CI/CD and Power BI.",
      hero_btn_projects: "View Projects",
      hero_btn_contact: "Contact Me",
      hero_btn_resume: "Resume",
      hero_btn_resume_en: "English CV",
      hero_btn_resume_de: "German CV",
      hero_btn_view_resume_en: "View English CV",
      hero_btn_download_resume_en: "Download English CV",
      hero_btn_view_resume_de: "View German CV",
      hero_btn_download_resume_de: "Download German CV",
      stat_experience: "Years Experience",
      stat_apps: "Enterprise Data Workflows Supported",
      stat_reporting: "Less Weekly Reporting Effort",

      about_title: "Who I Am",
      about_text:
        "I am a Data Engineer based in Germany with 5 years of experience across healthcare, financial services and applied data projects. I build ETL and ELT pipelines, integrate source systems through REST APIs and prepare structured data layers for analytics and reporting. My work focuses on Python, SQL, Azure Data Factory, Azure Data Lake, CI/CD and Power BI, with a strong interest in building reliable, maintainable and business-ready data workflows.",

      experience_title: "Professional Experience",

      exp1_1:
        "Integrated Matrix42 and qTest data via REST APIs and SQL transformations, creating structured datasets for incident, service request and test analytics.",
      exp1_2:
        "Reduced weekly reporting effort by 20% by replacing manual Excel exports with cleaner and reusable data preparation workflows.",
      exp1_3:
        "Migrated flat-file reporting workflows to Azure Data Lake using Azure Data Factory, implementing incremental loads and scheduled triggers.",
      exp1_4:
        "Enabled KPI tracking for SLA breaches, recurring incidents and service demand patterns by preparing reliable reporting-ready datasets.",
      exp1_5:
        "Supported Azure-based data workflow improvements with a focus on automation, data quality and maintainable pipeline outputs.",

      exp2_1:
        "Led data delivery for 22 financial applications across trade, portfolio, pricing and compliance domains for Jennison Associates.",
      exp2_2:
        "Built ADF-based ETL pipelines with Azure Data Lake, Azure Storage, validation checks and CI/CD support to improve reporting reliability.",
      exp2_3:
        "Maintained reliable production data workflows with zero SLA breaches while reducing manual data handling by 10%.",
      exp2_4:
        "Automated Excel-based reporting for AUM, portfolio exposure and performance views into Power BI-ready datasets, saving around 10 hours weekly.",
      exp2_5:
        "Organized pipeline outputs into raw, processed and curated Azure Data Lake layers to improve data accessibility for US portfolio teams.",

      featured_title: "Featured Project",
      view_more_projects: "View More Projects",

      energy_title: "Smart Electricity and Energy Optimizer",
      energy_featured_desc:
        "End-to-end data pipeline built to ingest, clean and integrate electricity and solar consumption data, preparing time-series datasets for forecasting and cost optimization.",
      energy_built:
        "I built a modular Python and PySpark pipeline with reusable transformation workflows, parameterized source paths, aggregation windows and forecast horizons.",
      energy_impact:
        "The workflow identified potential energy savings of 10 to 12% across different building profiles and showed how engineered datasets can support forecasting and decision-ready reporting.",

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
      level_proficient: "Proficient",
      level_native: "Native",

      value_title: "What I Bring",
      strength1_title: "Data Pipeline Ownership",
      strength1_text:
        "I build ETL and ELT workflows from source integration to reporting-ready datasets, with attention to automation, validation and maintainability.",
      strength2_title: "Azure Data Engineering",
      strength2_text:
        "I work with Azure Data Factory, Azure Data Lake, Azure Storage and CI/CD-supported workflows to create reliable cloud-based data pipelines.",
      strength3_title: "Business-Focused Reporting",
      strength3_text:
        "I prepare structured datasets and KPI layers that help teams monitor service demand, SLA trends, portfolio views and operational performance.",

      contact_title: "Get in Touch",
      contact_text:
        "Open to full-time Data Engineering, Analytics Engineering and Azure Data roles across Germany and Europe.",

      projects_title: "All Projects",
      projects_intro:
        "A selected collection of Data Engineering, forecasting and analytics projects focused on ETL pipelines, data integration, reporting-ready datasets and decision-oriented dashboards.",

      electricity_title: "Smart Electricity and Energy Optimizer",
      electricity_desc:
        "Built an end-to-end data pipeline to ingest, clean and integrate electricity and solar consumption data, preparing time-series datasets for forecasting, cost analysis and optimization.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Built reusable analytics workflows to integrate environmental and meteorological datasets for KPI generation, trend monitoring and predictive analysis of lake levels and water quality.",

      stroke_desc:
        "Built an interactive Power BI dashboard on a healthcare dataset of 5,110 patients to analyze risk factors, KPI trends and demographic stroke patterns.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Built a Streamlit application that compares resumes with job descriptions, uses local LLM processing and suggests stronger summaries and missing skills.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Performed exploratory data analysis on Portuguese wine datasets using data cleaning, preparation and visualization to study quality patterns based on chemical properties.",

      highlights_title: "Project Highlights",
      highlight_1:
        "Smart Electricity and Energy Optimizer: Built a modular Python and PySpark pipeline to integrate electricity and solar data, prepare time-series datasets and identify potential energy savings of 10 to 12%.",
      highlight_2:
        "Lake Monitoring and Quality Analysis: Combined environmental and meteorological datasets with Python, SQL and Spark to create reusable workflows for KPI generation, trend monitoring and predictive analysis.",
      highlight_3:
        "Stroke Risk Analytics Dashboard: Built a Power BI dashboard with KPI cards, DAX logic, filters and demographic analysis to improve interpretation of healthcare risk indicators.",
      highlight_4:
        "CV Optimizer: Developed a Streamlit application with a local LLM workflow to analyze resumes, job requirements, skill gaps and optimized profile summaries.",
      highlight_5:
        "Wine Quality Analysis: Applied data cleaning, exploratory analysis and visualization to study relationships between chemical properties and wine quality."
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

      hero_tagline: "Azure Data Engineer • ETL/ELT • BI-Reporting-Layer",
      hero_desc:
        "Data Engineer mit 5 Jahren Erfahrung im Aufbau von ETL- und ELT-Pipelines, REST-API-Integrationen und Azure-basierten Datenworkflows mit Python, SQL, Azure Data Factory, Azure Data Lake, CI/CD und Power BI.",
      hero_btn_projects: "Projekte ansehen",
      hero_btn_contact: "Kontakt",
      hero_btn_resume: "Lebenslauf",
      hero_btn_resume_en: "Englischer CV",
      hero_btn_resume_de: "Deutscher Lebenslauf",
      hero_btn_view_resume_en: "Englischen CV ansehen",
      hero_btn_download_resume_en: "Englischen CV herunterladen",
      hero_btn_view_resume_de: "Deutschen Lebenslauf ansehen",
      hero_btn_download_resume_de: "Deutschen Lebenslauf herunterladen",
      stat_experience: "Jahre Erfahrung",
      stat_apps: "Unterstützte Enterprise-Datenworkflows",
      stat_reporting: "Weniger wöchentlicher Reporting-Aufwand",

      about_title: "Wer ich bin",
      about_text:
        "Ich bin Data Engineer in Deutschland mit 5 Jahren Erfahrung in den Bereichen Gesundheitswesen, Finanzdienstleistungen und angewandte Datenprojekte. Ich entwickle ETL- und ELT-Pipelines, integriere Quellsysteme über REST-APIs und bereite strukturierte Datenschichten für Analytics und Reporting vor. Mein Fokus liegt auf Python, SQL, Azure Data Factory, Azure Data Lake, CI/CD und Power BI sowie auf zuverlässigen, wartbaren und geschäftsnahen Datenworkflows.",

      experience_title: "Berufserfahrung",

      exp1_1:
        "Integration von Matrix42- und qTest-Daten über REST-APIs und SQL-Transformationen zur Erstellung strukturierter Datensätze für Incident-, Service-Request- und Testanalysen.",
      exp1_2:
        "Reduzierung des wöchentlichen Reporting-Aufwands um 20% durch Ersatz manueller Excel-Exporte durch saubere und wiederverwendbare Datenaufbereitungs-Workflows.",
      exp1_3:
        "Migration von Flat-File-Reporting-Workflows nach Azure Data Lake mit Azure Data Factory, inklusive inkrementeller Loads und geplanter Trigger.",
      exp1_4:
        "Ermöglichung von KPI-Tracking für SLA-Verstöße, wiederkehrende Incidents und Service-Demand-Muster durch zuverlässige reportingfähige Datensätze.",
      exp1_5:
        "Unterstützung Azure-basierter Datenworkflow-Verbesserungen mit Fokus auf Automatisierung, Datenqualität und wartbare Pipeline-Outputs.",

      exp2_1:
        "Leitung der Datenbereitstellung für 22 Finanzanwendungen in den Bereichen Trade, Portfolio, Pricing und Compliance für Jennison Associates.",
      exp2_2:
        "Aufbau ADF-basierter ETL-Pipelines mit Azure Data Lake, Azure Storage, Validierungsprüfungen und CI/CD-Support zur Verbesserung der Reporting-Zuverlässigkeit.",
      exp2_3:
        "Sicherstellung zuverlässiger Produktionsdaten-Workflows mit null SLA-Verstößen und Reduzierung manueller Datenverarbeitung um 10%.",
      exp2_4:
        "Automatisierung Excel-basierter Reports für AUM, Portfolio Exposure und Performance Views in Power-BI-fähige Datensätze mit rund 10 Stunden Zeitersparnis pro Woche.",
      exp2_5:
        "Organisation von Pipeline-Outputs in Raw-, Processed- und Curated-Layers im Azure Data Lake zur Verbesserung der Datenverfügbarkeit für US-Portfolio-Teams.",

      featured_title: "Ausgewähltes Projekt",
      view_more_projects: "Mehr Projekte ansehen",

      energy_title: "Smart Electricity and Energy Optimizer",
      energy_featured_desc:
        "End-to-End-Datenpipeline zur Aufnahme, Bereinigung und Integration von Strom- und Solardaten, um Zeitreihendaten für Forecasting und Kostenoptimierung vorzubereiten.",
      energy_built:
        "Ich habe eine modulare Python- und PySpark-Pipeline mit wiederverwendbaren Transformations-Workflows, parametrisierten Quellpfaden, Aggregationsfenstern und Forecast-Horizonten aufgebaut.",
      energy_impact:
        "Der Workflow identifizierte potenzielle Energieeinsparungen von 10 bis 12% über verschiedene Gebäudprofile hinweg und zeigte, wie aufbereitete Datensätze Forecasting und entscheidungsreifes Reporting unterstützen können.",

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
      level_proficient: "Fließend",
      level_native: "Muttersprache",

      value_title: "Was ich einbringe",
      strength1_title: "Verantwortung für Datenpipelines",
      strength1_text:
        "Ich entwickle ETL- und ELT-Workflows von der Quellsystemintegration bis zu reportingfähigen Datensätzen mit Fokus auf Automatisierung, Validierung und Wartbarkeit.",
      strength2_title: "Azure Data Engineering",
      strength2_text:
        "Ich arbeite mit Azure Data Factory, Azure Data Lake, Azure Storage und CI/CD-gestützten Workflows, um zuverlässige cloudbasierte Datenpipelines aufzubauen.",
      strength3_title: "Geschäftsorientiertes Reporting",
      strength3_text:
        "Ich bereite strukturierte Datensätze und KPI-Layer vor, mit denen Teams Service Demand, SLA-Trends, Portfolio Views und operative Performance überwachen können.",

      contact_title: "Kontakt",
      contact_text:
        "Offen für Vollzeitrollen in Data Engineering, Analytics Engineering und Azure Data in Deutschland und Europa.",

      projects_title: "Alle Projekte",
      projects_intro:
        "Eine ausgewählte Sammlung von Data-Engineering-, Forecasting- und Analytics-Projekten mit Fokus auf ETL-Pipelines, Datenintegration, reportingfähige Datensätze und entscheidungsorientierte Dashboards.",

      electricity_title: "Smart Electricity and Energy Optimizer",
      electricity_desc:
        "Entwicklung einer End-to-End-Datenpipeline zur Aufnahme, Bereinigung und Integration von Strom- und Solardaten, um Zeitreihendaten für Forecasting, Kostenanalyse und Optimierung vorzubereiten.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Aufbau wiederverwendbarer Analyse-Workflows zur Integration von Umwelt- und Wetterdaten für KPI-Generierung, Trendmonitoring und prädiktive Auswertung von Seepegeln und Wasserqualität.",

      stroke_desc:
        "Entwicklung eines interaktiven Power-BI-Dashboards auf Basis eines Healthcare-Datensatzes mit 5.110 Patientinnen und Patienten zur Analyse von Risikofaktoren, KPI-Tracking und demografischen Mustern.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Entwicklung einer Streamlit-Anwendung, die Lebensläufe mit Stellenbeschreibungen abgleicht, lokale LLM-Verarbeitung nutzt und optimierte Zusammenfassungen sowie fehlende Kompetenzen vorschlägt.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Durchführung einer explorativen Datenanalyse auf portugiesischen Weindatensätzen mit Datenbereinigung, Aufbereitung und Visualisierung, um Qualitätsmuster anhand chemischer Eigenschaften zu untersuchen.",

      highlights_title: "Projekt-Highlights",
      highlight_1:
        "Smart Electricity and Energy Optimizer: Aufbau einer modularen Python- und PySpark-Pipeline zur Integration von Strom- und Solardaten, Vorbereitung von Zeitreihendaten und Identifikation potenzieller Energieeinsparungen von 10 bis 12%.",
      highlight_2:
        "Lake Monitoring and Quality Analysis: Kombination von Umwelt- und Wetterdaten mit Python, SQL und Spark zur Erstellung wiederverwendbarer Workflows für KPI-Generierung, Trendmonitoring und prädiktive Analyse.",
      highlight_3:
        "Stroke Risk Analytics Dashboard: Entwicklung eines Power-BI-Dashboards mit KPI-Karten, DAX-Logik, Filtern und demografischer Analyse zur besseren Interpretation von Gesundheitsrisiken.",
      highlight_4:
        "CV Optimizer: Entwicklung einer Streamlit-Anwendung mit lokalem LLM-Workflow zur Analyse von Lebensläufen, Jobanforderungen, Skill-Gaps und optimierten Profilzusammenfassungen.",
      highlight_5:
        "Wine Quality Analysis: Durchführung von Datenbereinigung, explorativer Analyse und Visualisierung zur Untersuchung von Zusammenhängen zwischen chemischen Eigenschaften und Weinqualität."
    }
  };

  const typingRoles = {
    en: [
      "Data Engineer",
      "Azure Data Engineer",
      "Analytics Engineer",
      "ETL Pipeline Developer",
      "Power BI Reporting Developer"
    ],
    de: [
      "Data Engineer",
      "Azure Data Engineer",
      "Analytics Engineer",
      "ETL-Pipeline-Entwickler",
      "Power-BI-Reporting-Entwickler"
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
      document.title = "Darpen Bhandari | Data Engineer Portfolio";
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
