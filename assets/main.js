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

      hero_tagline: "Azure Data Engineer • ETL/ELT • REST APIs • Power BI",
      hero_desc:
        "Azure Data Engineer building ETL/ELT pipelines, REST API integrations and reporting-ready data layers across finance and healthcare domains using Python, SQL, Azure Data Factory, Azure Data Lake, Azure DevOps and Power BI.",
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
      stat_apps: "Financial Applications Supported",
      stat_reporting: "Less Weekly Reporting Effort",

      about_title: "Who I Am",
      about_text:
        "I am a Data Engineer based in Mannheim, Germany with around 5 years of experience building data pipelines, API-based integrations and analytics-ready datasets across finance, healthcare and applied data projects. My work focuses on connecting operational systems, cleaning and transforming raw data and designing reliable data layers that support reporting, KPI tracking and business decision-making. I mainly work with Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, REST APIs, Azure DevOps and Power BI. I enjoy working at the point where engineering, data quality and business reporting meet: turning scattered source data into structured, validated and reusable datasets that teams can trust. I am currently open to full-time Data Engineering, Azure Data Engineering, ETL/ELT and BI Engineering roles across Germany and Europe.",

      experience_title: "Professional Experience",

      exp1_1:
        "Built automated ETL workflows integrating Matrix42 ticketing data and qTest QA data through REST APIs, Python and SQL transformations.",
      exp1_2:
        "Created structured datasets for incident analytics, service request tracking, test reporting and SLA monitoring.",
      exp1_3:
        "Reduced weekly manual reporting effort by 20% by replacing repeated Excel exports with reusable data preparation workflows.",
      exp1_4:
        "Supported the migration of flat-file reporting workflows toward Azure Data Lake and Azure Data Factory-based incremental loading.",
      exp1_5:
        "Prepared Power BI-ready KPI datasets to track SLA breaches, recurring incidents and service demand patterns.",

      exp2_1:
        "Supported end-to-end data delivery for 22 financial applications across trade, portfolio, pricing, compliance and reporting domains.",
      exp2_2:
        "Built ADF-based ETL pipelines using Azure Data Lake, Azure Storage, SQL validation checks and Azure DevOps CI/CD workflows.",
      exp2_3:
        "Automated Excel-based reporting for AUM, portfolio exposure and performance views into Power BI-ready datasets.",
      exp2_4:
        "Saved around 10 hours of weekly reconciliation effort for investment analytics teams by improving reporting data preparation.",
      exp2_5:
        "Organized pipeline outputs into raw, processed and curated Azure Data Lake layers to improve data accessibility and reduce manual data handling.",

      featured_title: "Featured Project",
      view_more_projects: "View More Projects",

      energy_title: "Smart Electricity and Energy Optimizer",
      energy_featured_desc:
        "Built an end-to-end data pipeline to ingest, clean and integrate electricity and solar consumption data, preparing structured time-series datasets for forecasting, cost analysis and energy optimization.",
      energy_built:
        "I built reusable Python and PySpark workflows with parameterized data paths, aggregation windows and reporting-ready outputs for energy usage analysis.",
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
      level_intermediate: "Intermediate",
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
        "Open to full-time Data Engineering, Azure Data Engineering, ETL/ELT and BI Engineering roles across Germany and Europe. Available for interviews via Google Meet, Microsoft Teams or phone.",

      projects_title: "All Projects",
      projects_intro:
        "A selected collection of Data Engineering, forecasting and analytics projects focused on ETL pipelines, data integration, reporting-ready datasets and decision-oriented dashboards.",

      electricity_title: "Smart Electricity and Energy Optimizer",
      electricity_desc:
        "Built an end-to-end data pipeline to ingest, clean and integrate electricity and solar consumption data, preparing structured time-series datasets for forecasting, cost analysis and energy optimization.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Built reusable analytics workflows to integrate environmental and weather-related datasets for KPI generation, trend monitoring and predictive analysis of lake levels and water quality.",

      stroke_desc:
        "Built an interactive Power BI dashboard using a healthcare dataset of 5,110 patients to analyze stroke risk factors, demographic trends and health-related KPI patterns.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Built a Streamlit-based CV optimizer that compares resumes with job descriptions, identifies missing skills and suggests stronger profile summaries using local LLM-supported workflows.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Performed exploratory data analysis on Portuguese wine quality datasets using Python, Pandas and visualization techniques to understand how chemical properties relate to wine quality scores.",

      highlights_title: "Project Highlights",
      highlight_1:
        "Smart Electricity and Energy Optimizer: Built a reusable Python and PySpark pipeline to integrate electricity and solar data, prepare structured time-series datasets and support forecasting, cost analysis and energy optimization.",
      highlight_2:
        "Lake Monitoring and Quality Analysis: Integrated environmental and weather-related datasets with Python, SQL and Spark to create reusable workflows for KPI generation, trend monitoring and predictive analysis.",
      highlight_3:
        "Stroke Risk Analytics Dashboard: Built a Power BI dashboard with KPI cards, filters, DAX logic and demographic analysis to make healthcare risk indicators easier to interpret.",
      highlight_4:
        "CV Optimizer: Developed a Streamlit application with local LLM-supported workflows to analyze resumes, job descriptions, skill gaps and optimized profile summaries.",
      highlight_5:
        "Wine Quality Analysis: Applied data cleaning, exploratory analysis, correlation checks and visualization to study relationships between chemical properties and wine quality scores."
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

      hero_tagline: "Azure Data Engineer • ETL/ELT • REST APIs • Power BI",
      hero_desc:
        "Azure Data Engineer mit Fokus auf ETL/ELT-Pipelines, REST-API-Integrationen und reportingfähige Datenschichten in Finance- und Healthcare-Umgebungen mit Python, SQL, Azure Data Factory, Azure Data Lake, Azure DevOps und Power BI.",
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
      stat_apps: "Unterstützte Finanzanwendungen",
      stat_reporting: "Weniger wöchentlicher Reporting-Aufwand",

      about_title: "Wer ich bin",
      about_text:
        "Ich bin Data Engineer in Mannheim mit rund 5 Jahren Erfahrung im Aufbau von Datenpipelines, API-basierten Integrationen und analytics-fähigen Datensätzen in den Bereichen Finance, Healthcare und angewandte Datenprojekte. Mein Fokus liegt darauf, operative Systeme anzubinden, Rohdaten zu bereinigen und zu transformieren sowie zuverlässige Datenschichten für Reporting, KPI-Tracking und datenbasierte Entscheidungen aufzubauen. Ich arbeite hauptsächlich mit Python, SQL, Azure Data Factory, Azure Data Lake, Azure SQL, REST APIs, Azure DevOps und Power BI. Besonders interessiert mich die Schnittstelle zwischen Data Engineering, Datenqualität und Business Reporting: verstreute Quelldaten in strukturierte, validierte und wiederverwendbare Datensätze zu verwandeln, denen Teams vertrauen können. Ich bin aktuell offen für Vollzeitrollen im Bereich Data Engineering, Azure Data Engineering, ETL/ELT und BI Engineering in Deutschland und Europa.",

      experience_title: "Berufserfahrung",

      exp1_1:
        "Aufbau automatisierter ETL-Workflows zur Integration von Matrix42-Ticketdaten und qTest-QA-Daten über REST APIs, Python und SQL-Transformationen.",
      exp1_2:
        "Erstellung strukturierter Datensätze für Incident-Analysen, Service-Request-Tracking, Test-Reporting und SLA-Monitoring.",
      exp1_3:
        "Reduzierung des wöchentlichen manuellen Reporting-Aufwands um 20% durch Ersatz wiederholter Excel-Exporte durch wiederverwendbare Datenaufbereitungs-Workflows.",
      exp1_4:
        "Unterstützung der Migration von Flat-File-Reporting-Workflows in Richtung Azure Data Lake und Azure-Data-Factory-basiertes inkrementelles Laden.",
      exp1_5:
        "Vorbereitung Power-BI-fähiger KPI-Datensätze zur Analyse von SLA-Verstößen, wiederkehrenden Incidents und Service-Demand-Mustern.",

      exp2_1:
        "Unterstützung der End-to-End-Datenbereitstellung für 22 Finanzanwendungen in den Bereichen Trade, Portfolio, Pricing, Compliance und Reporting.",
      exp2_2:
        "Aufbau ADF-basierter ETL-Pipelines mit Azure Data Lake, Azure Storage, SQL-Validierungsprüfungen und Azure-DevOps-CI/CD-Workflows.",
      exp2_3:
        "Automatisierung Excel-basierter Reports für AUM, Portfolio Exposure und Performance Views in Power-BI-fähige Datensätze.",
      exp2_4:
        "Einsparung von rund 10 Stunden wöchentlichem Reconciliation-Aufwand für Investment-Analytics-Teams durch verbesserte Reporting-Datenaufbereitung.",
      exp2_5:
        "Organisation von Pipeline-Outputs in Raw-, Processed- und Curated-Layers im Azure Data Lake zur Verbesserung der Datenverfügbarkeit und Reduzierung manueller Datenverarbeitung.",

      featured_title: "Ausgewähltes Projekt",
      view_more_projects: "Mehr Projekte ansehen",

      energy_title: "Smart Electricity and Energy Optimizer",
      energy_featured_desc:
        "End-to-End-Datenpipeline zur Aufnahme, Bereinigung und Integration von Strom- und Solardaten, um strukturierte Zeitreihendaten für Forecasting, Kostenanalyse und Energieoptimierung vorzubereiten.",
      energy_built:
        "Ich habe wiederverwendbare Python- und PySpark-Workflows mit parametrisierten Datenpfaden, Aggregationsfenstern und reportingfähigen Outputs für Energieverbrauchsanalysen aufgebaut.",
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
      level_intermediate: "Mittelstufe",
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
        "Offen für Vollzeitrollen in Data Engineering, Azure Data Engineering, ETL/ELT und BI Engineering in Deutschland und Europa. Verfügbar für Interviews über Google Meet, Microsoft Teams oder Telefon.",

      projects_title: "Alle Projekte",
      projects_intro:
        "Eine ausgewählte Sammlung von Data-Engineering-, Forecasting- und Analytics-Projekten mit Fokus auf ETL-Pipelines, Datenintegration, reportingfähige Datensätze und entscheidungsorientierte Dashboards.",

      electricity_title: "Smart Electricity and Energy Optimizer",
      electricity_desc:
        "Entwicklung einer End-to-End-Datenpipeline zur Aufnahme, Bereinigung und Integration von Strom- und Solardaten, um strukturierte Zeitreihendaten für Forecasting, Kostenanalyse und Energieoptimierung vorzubereiten.",

      lake_title: "Lake Monitoring and Quality Analysis",
      lake_desc:
        "Aufbau wiederverwendbarer Analyse-Workflows zur Integration von Umwelt- und Wetterdaten für KPI-Generierung, Trendmonitoring und prädiktive Auswertung von Seepegeln und Wasserqualität.",

      stroke_desc:
        "Entwicklung eines interaktiven Power-BI-Dashboards auf Basis eines Healthcare-Datensatzes mit 5.110 Patientinnen und Patienten zur Analyse von Schlaganfall-Risikofaktoren, demografischen Trends und KPI-Mustern.",

      cv_title: "CV Optimizer",
      cv_desc:
        "Entwicklung eines Streamlit-basierten CV-Optimizers, der Lebensläufe mit Stellenbeschreibungen abgleicht, fehlende Kompetenzen erkennt und stärkere Profilzusammenfassungen mit lokalen LLM-gestützten Workflows vorschlägt.",

      wine_title: "Wine Quality Analysis",
      wine_desc:
        "Durchführung einer explorativen Datenanalyse auf portugiesischen Weindatensätzen mit Python, Pandas und Visualisierungstechniken, um Zusammenhänge zwischen chemischen Eigenschaften und Qualitätsbewertungen zu verstehen.",

      highlights_title: "Projekt-Highlights",
      highlight_1:
        "Smart Electricity and Energy Optimizer: Aufbau einer wiederverwendbaren Python- und PySpark-Pipeline zur Integration von Strom- und Solardaten, Vorbereitung strukturierter Zeitreihendaten und Unterstützung von Forecasting, Kostenanalyse und Energieoptimierung.",
      highlight_2:
        "Lake Monitoring and Quality Analysis: Integration von Umwelt- und Wetterdaten mit Python, SQL und Spark zur Erstellung wiederverwendbarer Workflows für KPI-Generierung, Trendmonitoring und prädiktive Analyse.",
      highlight_3:
        "Stroke Risk Analytics Dashboard: Entwicklung eines Power-BI-Dashboards mit KPI-Karten, Filtern, DAX-Logik und demografischer Analyse zur besseren Interpretation von Gesundheitsrisiken.",
      highlight_4:
        "CV Optimizer: Entwicklung einer Streamlit-Anwendung mit lokalen LLM-gestützten Workflows zur Analyse von Lebensläufen, Stellenbeschreibungen, Skill-Gaps und optimierten Profilzusammenfassungen.",
      highlight_5:
        "Wine Quality Analysis: Anwendung von Datenbereinigung, explorativer Analyse, Korrelationsprüfungen und Visualisierung zur Untersuchung von Zusammenhängen zwischen chemischen Eigenschaften und Weinqualität."
    }
  };

  const typingRoles = {
    en: [
      "Azure Data Engineer",
      "ETL/ELT Pipeline Developer",
      "REST API Data Integration Specialist",
      "Analytics Engineer",
      "Power BI Reporting Developer"
    ],
    de: [
      "Azure Data Engineer",
      "ETL/ELT-Pipeline-Entwickler",
      "REST-API-Datenintegration",
      "Analytics Engineer",
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
        lang === "de"
          ? "Projekte | Darpen Bhandari | Data Engineering Portfolio"
          : "Projects | Darpen Bhandari | Data Engineering Portfolio";
    } else {
      document.title =
        lang === "de"
          ? "Darpen Bhandari | Azure Data Engineer in Germany"
          : "Darpen Bhandari | Azure Data Engineer in Germany";
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
