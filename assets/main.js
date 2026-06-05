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

      hero_tagline: "Azure Data Engineer • Medallion Lakehouses • dbt • Power BI",
      hero_desc:
        "Azure Data Engineer with 5 years of experience building Azure-native data platforms across finance and healthcare, including medallion lakehouses, dbt models, CI/CD quality gates and leadership of a six-engineer team.",
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
      stat_reporting: "SLA Compliance Across Portfolio Apps",

      about_title: "Who I Am",
      about_text:
        "I am a Data Engineer based in Mannheim with 5 years of experience building Azure-native data platforms across finance and healthcare. I design ADF pipelines, medallion lakehouses, dbt transformation layers and automated data-quality controls that turn operational data into trusted reporting products. My experience includes leading a six-engineer team, maintaining 100% SLA compliance across 22 financial applications and automating more than 10 hours of weekly reconciliation work. I hold an M.Sc. in Applied Data Science and Analytics and am immediately available for Data Engineering roles.",

      experience_title: "Professional Experience",

      exp1_1:
        "Reduced manual reporting effort by 20% by building Python-based REST API ingestion pipelines between qTest and Matrix42.",
      exp1_2:
        "Designed end-to-end ADF pipelines with parameterized triggers, incremental loads and ADLS integration for scheduled SLA monitoring.",
      exp1_3:
        "Improved Power BI reliability through dbt staging, intermediate and mart models with automated schema, relationship and null-value tests.",
      exp1_4:
        "Introduced GitHub Actions CI/CD gates running dbt tests, SQL checks and pipeline configuration validation before deployment.",
      exp1_5:
        "Partnered with IT service management teams to define reporting requirements, SLA definitions and recurring KPI analysis.",

      exp2_1:
        "Led a team of six data engineers delivering pipeline and reporting solutions across 22 US financial portfolio applications.",
      exp2_2:
        "Maintained 100% SLA compliance by architecting ADF pipelines with incremental loads, failure alerting and automated retries.",
      exp2_3:
        "Saved almost 10 hours of weekly reconciliation work by replacing manual Excel-based AUM and performance reports with automated Python and SQL pipelines.",
      exp2_4:
        "Designed a Parquet-based ADLS medallion architecture with Bronze, Silver and Gold layers for reusable portfolio data products.",
      exp2_5:
        "Modelled curated outputs as star-schema facts and dimensions with automated null, duplicate and reconciliation-gap checks.",

      featured_title: "Featured Project",
      view_more_projects: "View More Projects",

      energy_title: "Smart Energy Forecasting Pipeline",
      energy_featured_desc:
        "Designed a medallion lakehouse for electricity, solar, weather and cost data that identified 12% potential energy savings across building profiles.",
      energy_built:
        "I built Bronze, Silver and Gold layers with dbt models, automated quality tests and parameterized aggregation windows for forecasting and Power BI.",
      energy_impact:
        "The pipeline identified 12% potential energy savings and created trusted downstream datasets for building-level forecasting and analysis.",

      stroke_title: "Stroke Risk Analytics Dashboard",
      stroke_featured_desc:
        "Built an interactive Power BI dashboard using a healthcare dataset of 5,110 patients to analyze stroke risk factors, demographic trends and health-related KPI patterns.",

      what_built_title: "What I built",
      stroke_built:
        "I designed a Power BI dashboard with KPI cards, age-group analysis, BMI category views, smoking-status breakdowns and health-risk comparisons to make patient-level insights easier to understand.",

      why_matters_title: "Why it matters",
      stroke_impact:
        "The dashboard helps highlight how stroke risk patterns relate to age, hypertension, heart disease, BMI, glucose levels and smoking status, turning healthcare data into a clearer reporting view.",

      skills_title: "Skill Levels",
      level_advanced: "Advanced",
      level_strong: "Strong",
      level_working: "Working",
      level_fluent: "Fluent",
      level_intermediate: "Intermediate",
      level_native: "Native",

      credentials_title: "Education, Certifications & Availability",
      education_title: "M.Sc. Applied Data Science and Analytics",
      education_text:
        "SRH Hochschule Heidelberg, completed September 2025. Master's thesis focused on a Smart Energy Forecasting Pipeline.",
      certificates_title: "Certifications",
      certificates_text:
        "Microsoft Azure Fundamentals (AZ-900), Databricks for Data Engineering and NVIDIA Deep Learning Fundamentals.",
      availability_title: "Based in Mannheim, Immediately Available",
      availability_text:
        "English C1, German B1 and a valid German residence permit. Open to Data Engineering roles across Germany and Europe.",

      value_title: "What I Bring",
      strength1_title: "Data Pipeline Ownership",
      strength1_text:
        "I design reliable pipelines from ingestion through curated marts, with incremental loading, monitoring, automated retries and production-focused validation.",
      strength2_title: "Azure Data Engineering",
      strength2_text:
        "I build Azure-native medallion lakehouses with ADF, ADLS, Databricks, Parquet and dbt transformation layers.",
      strength3_title: "Business-Focused Reporting",
      strength3_text:
        "I bring team-lead experience, cross-functional delivery and a record of measurable outcomes including 100% SLA compliance and major reporting automation.",

      contact_title: "Get in Touch",
      contact_text:
        "Immediately available for full-time Data Engineering and Azure Data Engineering roles across Germany and Europe. Valid German residence permit; available for interviews via Google Meet, Microsoft Teams or phone.",

      projects_title: "All Projects",
      projects_intro:
        "A selected collection of Data Engineering, forecasting and analytics projects focused on ETL pipelines, data integration, reporting-ready datasets and decision-oriented dashboards.",

      electricity_title: "Smart Energy Forecasting Pipeline",
      electricity_desc:
        "Designed a Bronze, Silver and Gold lakehouse for electricity, solar, weather and cost data, identifying 12% potential energy savings across building profiles.",

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
        "Smart Energy Forecasting Pipeline: Designed a medallion lakehouse with dbt models and automated quality tests, identifying 12% potential energy savings across building profiles.",
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

      hero_tagline: "Azure Data Engineer • Medallion Lakehouses • dbt • Power BI",
      hero_desc:
        "Azure Data Engineer mit 5 Jahren Erfahrung im Aufbau Azure-nativer Datenplattformen in Finance und Healthcare, inklusive Medallion Lakehouses, dbt-Modellen, CI/CD Quality Gates und Leitung eines sechsköpfigen Engineer-Teams.",
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
      stat_reporting: "SLA Compliance über Portfolio-Anwendungen",

      about_title: "Wer ich bin",
      about_text:
        "Ich bin Data Engineer in Mannheim mit 5 Jahren Erfahrung im Aufbau Azure-nativer Datenplattformen in Finance und Healthcare. Ich entwickle ADF-Pipelines, Medallion Lakehouses, dbt-Transformationsschichten und automatisierte Datenqualitätskontrollen. Meine Erfahrung umfasst die Leitung eines sechsköpfigen Engineer-Teams, 100% SLA Compliance über 22 Finanzanwendungen und die Automatisierung von mehr als 10 Stunden wöchentlicher Reconciliation-Arbeit. Ich habe einen M.Sc. in Applied Data Science and Analytics und bin sofort verfügbar.",

      experience_title: "Berufserfahrung",

      exp1_1:
        "Reduzierung des manuellen Reporting-Aufwands um 20% durch Python-basierte REST-API-Ingestion-Pipelines zwischen qTest und Matrix42.",
      exp1_2:
        "Entwicklung von End-to-End-ADF-Pipelines mit parametrisierten Triggern, inkrementellen Loads und ADLS-Integration für geplantes SLA-Monitoring.",
      exp1_3:
        "Verbesserung der Power-BI-Datenzuverlässigkeit durch dbt Staging-, Intermediate- und Mart-Modelle mit automatisierten Tests.",
      exp1_4:
        "Einführung von GitHub-Actions-CI/CD-Gates für dbt-Tests, SQL-Checks und Pipeline-Konfigurationsprüfungen vor dem Deployment.",
      exp1_5:
        "Zusammenarbeit mit IT-Service-Management-Teams zur Definition von Reporting-Anforderungen, SLAs und wiederkehrenden KPI-Auswertungen.",

      exp2_1:
        "Leitung eines sechsköpfigen Data-Engineer-Teams für Pipeline- und Reporting-Lösungen über 22 US-Finanzportfolio-Anwendungen.",
      exp2_2:
        "Einhaltung von 100% SLA Compliance durch ADF-Pipelines mit inkrementellen Loads, Fehlerbenachrichtigungen und automatisierten Wiederholungen.",
      exp2_3:
        "Einsparung von fast 10 Stunden wöchentlicher Reconciliation-Arbeit durch automatisierte Python- und SQL-Pipelines für AUM- und Performance-Reporting.",
      exp2_4:
        "Aufbau einer Parquet-basierten ADLS-Medallion-Architektur mit Bronze-, Silver- und Gold-Layern.",
      exp2_5:
        "Modellierung kuratierter Daten als Star-Schema-Facts und -Dimensions mit automatisierten Nullwert-, Duplikat- und Reconciliation-Gap-Prüfungen.",

      featured_title: "Ausgewähltes Projekt",
      view_more_projects: "Mehr Projekte ansehen",

      energy_title: "Smart Energy Forecasting Pipeline",
      energy_featured_desc:
        "Aufbau eines Medallion Lakehouse für Strom-, Solar-, Wetter- und Kostendaten mit 12% identifiziertem Energieeinsparpotenzial.",
      energy_built:
        "Ich entwickelte Bronze-, Silver- und Gold-Layer mit dbt-Modellen, automatisierten Qualitätstests und parametrisierten Aggregationsfenstern für Forecasting und Power BI.",
      energy_impact:
        "Die Pipeline identifizierte 12% potenzielle Energieeinsparung und lieferte zuverlässige Datensätze für Forecasting und Gebäudeanalysen.",

      stroke_title: "Stroke Risk Analytics Dashboard",
      stroke_featured_desc:
        "Interaktives Power-BI-Dashboard auf Basis eines Healthcare-Datensatzes mit 5.110 Patientinnen und Patienten zur Analyse von Schlaganfall-Risikofaktoren, demografischen Trends und gesundheitsbezogenen KPI-Mustern.",

      what_built_title: "Was ich entwickelt habe",
      stroke_built:
        "Ich habe ein Power-BI-Dashboard mit KPI-Karten, Altersgruppenanalyse, BMI-Kategorien, Auswertungen zum Rauchstatus und Gesundheitsrisikovergleichen entwickelt, um patientenbezogene Erkenntnisse verständlicher darzustellen.",

      why_matters_title: "Warum es wichtig ist",
      stroke_impact:
        "Das Dashboard zeigt, wie Schlaganfall-Risikomuster mit Alter, Bluthochdruck, Herzerkrankungen, BMI, Glukosewerten und Rauchstatus zusammenhängen und macht Healthcare-Daten besser für Reporting nutzbar.",

      skills_title: "Kenntnisstand",
      level_advanced: "Fortgeschritten",
      level_strong: "Stark",
      level_working: "Praxiskenntnisse",
      level_fluent: "Fließend",
      level_intermediate: "Mittelstufe",
      level_native: "Muttersprache",

      credentials_title: "Ausbildung, Zertifikate & Verfügbarkeit",
      education_title: "M.Sc. Applied Data Science and Analytics",
      education_text:
        "SRH Hochschule Heidelberg, Abschluss September 2025. Die Masterarbeit behandelte eine Smart Energy Forecasting Pipeline.",
      certificates_title: "Zertifikate",
      certificates_text:
        "Microsoft Azure Fundamentals (AZ-900), Databricks for Data Engineering und NVIDIA Deep Learning Fundamentals.",
      availability_title: "In Mannheim, sofort verfügbar",
      availability_text:
        "Englisch C1, Deutsch B1 und gültiger deutscher Aufenthaltstitel. Offen für Data-Engineering-Rollen in Deutschland und Europa.",

      value_title: "Was ich einbringe",
      strength1_title: "Verantwortung für Datenpipelines",
      strength1_text:
        "Ich entwickle zuverlässige Pipelines von der Ingestion bis zu kuratierten Marts mit inkrementellen Loads, Monitoring, automatisierten Wiederholungen und produktionsnaher Validierung.",
      strength2_title: "Azure Data Engineering",
      strength2_text:
        "Ich baue Azure-native Medallion Lakehouses mit ADF, ADLS, Databricks, Parquet und dbt-Transformationsschichten.",
      strength3_title: "Geschäftsorientiertes Reporting",
      strength3_text:
        "Ich bringe Teamleitung, cross-funktionale Zusammenarbeit und messbare Ergebnisse wie 100% SLA Compliance und umfassende Reporting-Automatisierung ein.",

      contact_title: "Kontakt",
      contact_text:
        "Sofort verfügbar für Vollzeitrollen in Data Engineering und Azure Data Engineering in Deutschland und Europa. Gültiger deutscher Aufenthaltstitel; verfügbar für Interviews über Google Meet, Microsoft Teams oder Telefon.",

      projects_title: "Alle Projekte",
      projects_intro:
        "Eine ausgewählte Sammlung von Data-Engineering-, Forecasting- und Analytics-Projekten mit Fokus auf ETL-Pipelines, Datenintegration, reportingfähige Datensätze und entscheidungsorientierte Dashboards.",

      electricity_title: "Smart Energy Forecasting Pipeline",
      electricity_desc:
        "Aufbau eines Bronze-, Silver- und Gold-Lakehouse für Strom-, Solar-, Wetter- und Kostendaten mit 12% identifiziertem Energieeinsparpotenzial.",

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
        "Smart Energy Forecasting Pipeline: Aufbau eines Medallion Lakehouse mit dbt-Modellen und automatisierten Qualitätstests; identifiziertes Energieeinsparpotenzial von 12%.",
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
      "Medallion Lakehouse Engineer",
      "dbt & Data Quality Engineer",
      "Data Engineering Team Lead",
      "Power BI Analytics Engineer"
    ],
    de: [
      "Azure Data Engineer",
      "Medallion-Lakehouse-Engineer",
      "dbt- und Datenqualitäts-Engineer",
      "Data-Engineering-Teamlead",
      "Power-BI-Analytics-Engineer"
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
