// category "data" shows under Data Engineering, "app" under Full-stack & ML.
// liveUrl is optional: with no liveUrl the Live button is hidden.
export const projects = [
  {
    slug: "wikipedia-attention-platform",
    category: "data",
    title: "Wikipedia Attention Platform",
    description:
      "Capstone pipeline joining a live Wikipedia edit stream (501,604 events through Kafka) with 24 hourly pageview files (49.5M English rows, Spark to Parquet) in Postgres. dbt models with 18 passing tests show edited pages get about 10 times the views of the average page. Orchestrated with Airflow, with a health task that fails the run on any problem. Decision log, runbook and known limits included.",
    tech: ["Kafka", "Spark", "PostgreSQL", "dbt", "Airflow", "Docker"],
    githubUrl: "https://github.com/zainab-f207/wikipedia-attention-platform",
  },
  {
    slug: "wiki-streaming-pipeline",
    category: "data",
    title: "Wikipedia Real-Time Streaming Pipeline",
    description:
      "Streams Wikipedia's live change feed (30 to 40 events per second) through Kafka into one-minute event-time windows with a 2-minute watermark in Spark Structured Streaming, saved to Postgres with checkpointing. A restart test resumed at the next batch with no duplicates; 0 duplicates in 16,634 events checked.",
    tech: ["Kafka", "Spark Structured Streaming", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/zainab-f207/wiki-streaming-pipeline",
  },
  {
    slug: "nyc-taxi-data-lake",
    category: "data",
    title: "NYC Taxi Cloud Data Lake",
    description:
      "Bronze, silver and gold lake on 48.7M NYC taxi trips. Spark flags 7 quality problems instead of deleting rows, and the gold table reconciles exactly (48,722,602 minus 2,264 excluded trips equals 48,720,338). Measured Athena scan cost: a partition filter scanned 6.14 MB against 86.68 MB unfiltered, about 14 times less.",
    tech: ["AWS S3", "Athena", "Spark", "Azure Blob", "Docker"],
    githubUrl: "https://github.com/zainab-f207/nyc-taxi-data-lake",
  },
  {
    slug: "olist-ecommerce-warehouse",
    category: "data",
    title: "Olist E-commerce Data Warehouse",
    description:
      "About 100,000 orders from 8 CSV files modelled into a star schema with 4 fact tables using dbt, with 32 passing tests and row counts reconciled to staging (99,441 orders, 112,650 items). Load, dbt run and dbt test orchestrated in Airflow, started with a single docker compose up.",
    tech: ["dbt", "PostgreSQL", "Airflow", "Docker"],
    githubUrl: "https://github.com/zainab-f207/olist-ecommerce-warehouse",
  },
  {
    slug: "nigehbaan",
    category: "app",
    title: "Nigehbaan — Pakistan's Guardian Network",
    description:
      "A full-stack disaster response platform with JWT authentication and role-based access for Admin, Responder, and Citizen roles. Includes an automated engine that assigns the nearest responder out of 47 organizations across 8 cities using the Haversine formula, plus live GPS geofencing and real-time alerts through SignalR.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "React", "Tailwind CSS", "SignalR"],
    liveUrl: "https://nigehbaanpk.vercel.app/",
    githubUrl: "https://github.com/zainab-f207/disaster_management_system",
  },
  {
    slug: "resumecraft-pro",
    category: "app",
    title: "ResumeCraft Pro",
    description:
      "An automated resume builder with 10 templates, PDF export via iText7 and DOCX export via the Open XML SDK. Includes an ATS match-scoring engine that compares a resume against a job description and returns a 0–100 score, with a regex-based fallback when AI providers are down.",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server", "ADO.NET"],
    githubUrl: "https://github.com/zainab-f207/automated-resume-generator",
  },
  {
    slug: "safevision",
    category: "app",
    title: "SafeVision — Crime Analytics for Lahore",
    description:
      "A crime analytics platform that maps and predicts incidents across Lahore. Trained a Random Forest model on 25,440 FIR records across 31 areas, and built an Urdu FIR reader that combines Gemini 2.5 Flash, OCR, and fuzzy location matching.",
    tech: ["FastAPI", "Python", "React", "MySQL", "Leaflet"],
    liveUrl: "https://safevision.vercel.app/",
    githubUrl: "https://github.com/zainab-f207/FYP-Project",
  },
];
