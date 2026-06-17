document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      nav_about: "About",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      hero_role: "Data Engineer and Analytics Engineer with strong BI reporting experience",
      hero_desc:
        "Data Engineer and Analytics Engineer with 5 years of experience building reliable data pipelines, reporting layers and BI dashboards across healthcare IT and financial services. I work with Python, SQL, Azure, dbt, Databricks, PySpark, Power BI and DAX to turn operational data into clean datasets, KPIs and business-ready insights.",
      cv_de: "View Data Engineering CV",
      cv_da: "View BI / Data Analyst CV",
      cv_note: "German version available on request.",
      status_title: "Germany & EU roles",
      status_text: "Mannheim, Germany. Open to Data Engineering, Analytics Engineering and BI reporting roles.",
      build_title: "What I Build",
      build_pipeline_title: "Data Pipelines",
      build_pipeline_text: "REST API ingestion, ETL/ELT workflows, Azure data layers and reliable reporting datasets.",
      build_analytics_title: "Analytics Engineering",
      build_analytics_text: "dbt models, reporting marts, data quality checks, KPI logic and validated business-ready datasets.",
      build_bi_title: "BI Dashboards",
      build_bi_text: "Power BI, DAX, Power Query, SQL analysis and stakeholder-facing KPI dashboards.",
      experience_title: "Experience",
      exp_health_label: "Healthcare IT Analytics",
      exp_health_title: "Data and System Analytics Associate",
      exp_health_1: "Built Python REST API ingestion pipelines between qTest and Matrix42 for incident, service request and test execution data.",
      exp_health_2: "Designed ADF pipelines with parameterized triggers and incremental loads into ADLS for scheduled SLA breach monitoring.",
      exp_health_3: "Created dbt staging and mart models with SQL checks, schema tests and GitHub Actions quality gates before release.",
      exp_health_4: "Mapped qTest and Matrix42 source data into Power BI-ready reporting datasets, improving weekly reporting and SLA monitoring reliability.",
      exp_health_5: "Defined KPI logic, validated source data and reduced manual reporting effort by combining SQL, Python, dbt and Power BI reporting layers.",
      exp_fin_label: "Financial Services Reporting",
      exp_fin_title: "Senior Software Engineer",
      exp_fin_1: "Led delivery across 22 US financial portfolio applications covering AUM, performance tracking, reconciliation analysis and SLA reporting.",
      exp_fin_2: "Built Azure pipeline and reporting workflows with ADF incremental loads, failure alerting, retries and DevOps monitoring.",
      exp_fin_3: "Automated Excel-based reporting refreshes using SQL, Python, Power Query and structured reporting layers feeding Power BI outputs.",
      exp_fin_4: "Worked with ADLS medallion patterns, Parquet datasets, Databricks/PySpark concepts, dbt modelling and CI/CD release checks.",
      exp_fin_5: "Maintained 100% SLA compliance and reduced month-end reconciliation/reporting effort through ETL/ELT automation.",
      featured_title: "Featured Projects",
      view_all_projects: "View All Projects",
      role_fit_de: "<strong>Looking for Data Engineering roles?</strong> Start with DB Train Delay, Smart Energy and Electricity Insights.",
      role_fit_bi: "<strong>Looking for BI / Data Analyst roles?</strong> Start with Stroke Risk, Electricity Dashboard and Wine Quality Analysis.",
      project_de_label: "Data Engineering / Analytics Engineering",
      project_health_label: "BI Analyst / Healthcare Data Analyst",
      project_bi_label: "Data Analyst / BI Analyst",
      project_db_text: "Built German rail route reliability metrics with API ingestion, bronze/silver/gold layers, dbt models and a Streamlit dashboard.",
      project_energy_text: "Built forecasting-ready datasets for electricity, solar, weather and cost data to support energy optimization decisions.",
      project_stroke_text: "Built Power BI views for 5,110 patient records across age, BMI, glucose, hypertension and smoking status.",
      project_electricity_text: "Created dashboard views for actual vs predicted load, renewable contribution, forecast error and model performance.",
      skills_title: "Core Skills",
      skill_de_1: "Python, SQL, REST APIs",
      skill_de_2: "Azure Data Factory, Azure Data Lake, Azure SQL",
      skill_de_3: "ETL/ELT, incremental loads, medallion architecture",
      skill_de_4: "Databricks, PySpark, Delta Lake, Parquet",
      skill_de_5: "Snowflake, Kafka, Airflow, Docker",
      skill_ae_1: "dbt staging and mart models",
      skill_ae_2: "Star schema, facts and dimensions",
      skill_ae_3: "Reporting marts and KPI logic",
      skill_ae_4: "Data quality checks and validation",
      skill_ae_5: "GitHub Actions CI/CD quality gates",
      skill_bi_1: "Power BI, DAX, Power Query",
      skill_bi_2: "Tableau, Excel, KPI dashboards",
      skill_bi_3: "AUM reporting, SLA reporting",
      skill_bi_4: "Reconciliation analysis",
      skill_bi_5: "Ad hoc analysis and stakeholder reporting",
      domain_1: "Healthcare IT analytics",
      domain_2: "Finance and portfolio reporting",
      soft_title: "Soft Skills",
      soft_1: "Stakeholder communication",
      soft_2: "Business requirement analysis",
      soft_3: "Problem solving",
      soft_4: "Ownership and delivery focus",
      soft_5: "Team leadership and coordination",
      contact_title: "Contact",
      projects_page_title: "Projects by Role Fit",
      projects_intro: "A focused set of projects for Data Engineering, Analytics Engineering, BI reporting and automation roles. Use the filters to quickly match the evidence to the role you are hiring for.",
      filter_all: "All",
      filter_de: "Data Engineering",
      filter_bi: "BI & Analytics",
      filter_ai: "AI / Automation"
    },
    de: {
      nav_about: "Profil",
      nav_experience: "Erfahrung",
      nav_projects: "Projekte",
      nav_skills: "Skills",
      nav_contact: "Kontakt",
      hero_role: "Data Engineer und Analytics Engineer mit starker BI-Reporting-Erfahrung",
      hero_desc:
        "Data Engineer und Analytics Engineer mit 5 Jahren Erfahrung im Aufbau zuverlässiger Datenpipelines, Reporting-Layer und BI-Dashboards in Healthcare IT und Financial Services. Ich arbeite mit Python, SQL, Azure, dbt, Databricks, PySpark, Power BI und DAX, um operative Daten in saubere Datensätze, KPIs und businessfähige Insights zu verwandeln.",
      cv_de: "Data Engineering CV ansehen",
      cv_da: "BI / Data Analyst CV ansehen",
      cv_note: "Deutsche Version auf Anfrage verfügbar.",
      status_title: "Rollen in Deutschland & EU",
      status_text: "Mannheim, Deutschland. Offen für Data Engineering, Analytics Engineering und BI-Reporting-Rollen.",
      build_title: "Was ich baue",
      build_pipeline_title: "Datenpipelines",
      build_pipeline_text: "REST-API-Ingestion, ETL/ELT-Workflows, Azure-Datenlayer und zuverlässige Reporting-Datensätze.",
      build_analytics_title: "Analytics Engineering",
      build_analytics_text: "dbt-Modelle, Reporting-Marts, Datenqualitätsprüfungen, KPI-Logik und validierte businessfähige Datensätze.",
      build_bi_title: "BI Dashboards",
      build_bi_text: "Power BI, DAX, Power Query, SQL-Analysen und stakeholderorientierte KPI-Dashboards.",
      experience_title: "Erfahrung",
      exp_health_label: "Healthcare IT Analytics",
      exp_health_title: "Data and System Analytics Associate",
      exp_health_1: "Aufbau von Python-REST-API-Ingestion-Pipelines zwischen qTest und Matrix42 für Incident-, Service-Request- und Test-Execution-Daten.",
      exp_health_2: "Entwicklung von ADF-Pipelines mit parametrisierten Triggern und inkrementellen Loads nach ADLS für geplantes SLA-Breach-Monitoring.",
      exp_health_3: "Erstellung von dbt-Staging- und Mart-Modellen mit SQL-Checks, Schema-Tests und GitHub-Actions-Quality-Gates vor Releases.",
      exp_health_4: "Mapping von qTest- und Matrix42-Quelldaten in Power-BI-fähige Reporting-Datensätze zur Verbesserung von Weekly Reporting und SLA-Monitoring.",
      exp_health_5: "Definition von KPI-Logik, Validierung von Quelldaten und Reduktion manueller Reporting-Arbeit durch SQL, Python, dbt und Power-BI-Reporting-Layer.",
      exp_fin_label: "Financial Services Reporting",
      exp_fin_title: "Senior Software Engineer",
      exp_fin_1: "Delivery über 22 US-Finanzportfolio-Anwendungen mit AUM, Performance Tracking, Reconciliation Analysis und SLA Reporting.",
      exp_fin_2: "Aufbau von Azure-Pipeline- und Reporting-Workflows mit ADF Incremental Loads, Failure Alerting, Retries und DevOps Monitoring.",
      exp_fin_3: "Automatisierung Excel-basierter Reporting-Refreshes mit SQL, Python, Power Query und strukturierten Reporting-Layern für Power-BI-Outputs.",
      exp_fin_4: "Arbeit mit ADLS-Medallion-Patterns, Parquet-Datensätzen, Databricks/PySpark-Konzepten, dbt-Modellierung und CI/CD-Release-Checks.",
      exp_fin_5: "Sicherstellung von 100% SLA Compliance und Reduktion von Month-End-Reconciliation- und Reporting-Aufwand durch ETL/ELT-Automatisierung.",
      featured_title: "Ausgewählte Projekte",
      view_all_projects: "Alle Projekte ansehen",
      role_fit_de: "<strong>Data-Engineering-Rollen?</strong> Starte mit DB Train Delay, Smart Energy und Electricity Insights.",
      role_fit_bi: "<strong>BI / Data-Analyst-Rollen?</strong> Starte mit Stroke Risk, Electricity Dashboard und Wine Quality Analysis.",
      project_de_label: "Data Engineering / Analytics Engineering",
      project_health_label: "BI Analyst / Healthcare Data Analyst",
      project_bi_label: "Data Analyst / BI Analyst",
      project_db_text: "Aufbau von Zuverlässigkeitsmetriken für deutsche Bahnstrecken mit API-Ingestion, Bronze/Silver/Gold-Layern, dbt-Modellen und Streamlit-Dashboard.",
      project_energy_text: "Aufbau forecastingfähiger Datensätze für Strom-, Solar-, Wetter- und Kostendaten zur Unterstützung von Energieoptimierung.",
      project_stroke_text: "Power-BI-Ansichten für 5.110 Patientendatensätze nach Alter, BMI, Glukose, Hypertonie und Rauchstatus.",
      project_electricity_text: "Dashboard-Ansichten für Actual vs. Predicted Load, Renewable Contribution, Forecast Error und Modellperformance.",
      skills_title: "Core Skills",
      skill_de_1: "Python, SQL, REST APIs",
      skill_de_2: "Azure Data Factory, Azure Data Lake, Azure SQL",
      skill_de_3: "ETL/ELT, inkrementelle Loads, Medallion Architecture",
      skill_de_4: "Databricks, PySpark, Delta Lake, Parquet",
      skill_de_5: "Snowflake, Kafka, Airflow, Docker",
      skill_ae_1: "dbt-Staging- und Mart-Modelle",
      skill_ae_2: "Star Schema, Facts und Dimensions",
      skill_ae_3: "Reporting-Marts und KPI-Logik",
      skill_ae_4: "Datenqualitätsprüfungen und Validierung",
      skill_ae_5: "GitHub-Actions-CI/CD-Quality-Gates",
      skill_bi_1: "Power BI, DAX, Power Query",
      skill_bi_2: "Tableau, Excel, KPI-Dashboards",
      skill_bi_3: "AUM Reporting, SLA Reporting",
      skill_bi_4: "Reconciliation Analysis",
      skill_bi_5: "Ad-hoc-Analysen und Stakeholder Reporting",
      domain_1: "Healthcare IT Analytics",
      domain_2: "Finance und Portfolio Reporting",
      soft_title: "Soft Skills",
      soft_1: "Stakeholder-Kommunikation",
      soft_2: "Business Requirement Analysis",
      soft_3: "Problem Solving",
      soft_4: "Ownership und Delivery-Fokus",
      soft_5: "Team Leadership und Koordination",
      contact_title: "Kontakt",
      projects_page_title: "Projekte nach Rollen-Fit",
      projects_intro: "Eine fokussierte Auswahl von Projekten für Data Engineering, Analytics Engineering, BI Reporting und Automation. Nutze die Filter, um die passenden Nachweise für die Rolle schnell zu finden.",
      filter_all: "Alle",
      filter_de: "Data Engineering",
      filter_bi: "BI & Analytics",
      filter_ai: "AI / Automation"
    }
  };

  const filterButtons = document.querySelectorAll("[data-project-filter]");
  const projectCards = document.querySelectorAll("[data-project-category]");
  const projectSections = document.querySelectorAll("[data-project-section]");
  const langButtons = {
    de: document.getElementById("lang-de"),
    en: document.getElementById("lang-en")
  };

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.de;

    document.documentElement.lang = lang;
    localStorage.setItem("portfolioLanguageV2", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (!dictionary[key]) return;
      if (dictionary[key].includes("<")) element.innerHTML = dictionary[key];
      else element.textContent = dictionary[key];
    });

    Object.entries(langButtons).forEach(([code, button]) => {
      if (button) button.classList.toggle("active", code === lang);
    });

    window.dispatchEvent(new CustomEvent("portfolioLanguageChanged", { detail: { lang } }));
  }

  function updateSectionVisibility() {
    projectSections.forEach((section) => {
      const visibleCards = section.querySelectorAll("[data-project-category]:not(.is-hidden)");
      section.classList.toggle("is-hidden", visibleCards.length === 0);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.dataset.projectCategory.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });

      updateSectionVisibility();
    });
  });

  Object.entries(langButtons).forEach(([lang, button]) => {
    if (button) button.addEventListener("click", () => setLanguage(lang));
  });

  updateSectionVisibility();
  setLanguage(localStorage.getItem("portfolioLanguageV2") || "de");
});
