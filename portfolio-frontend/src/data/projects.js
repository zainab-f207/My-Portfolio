export const projects = [
  {
    slug: "nigehbaan",
    title: "Nigehbaan — Pakistan's Guardian Network",
    description:
      "A full-stack disaster response platform with JWT authentication and role-based access for Admin, Responder, and Citizen roles. Includes an automated engine that assigns the nearest responder out of 47 organizations across 8 cities using the Haversine formula, plus live GPS geofencing and real-time alerts through SignalR.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "React", "Tailwind CSS", "SignalR"],
    liveUrl: "https://your-nigehbaan-demo-link.com",
    githubUrl: "https://github.com/zainab-f207/nigehbaan",
  },
  {
    slug: "resumecraft-pro",
    title: "ResumeCraft Pro",
    description:
      "An automated resume builder with 10 templates, PDF export via iText7 and DOCX export via the Open XML SDK. Includes an ATS match-scoring engine that compares a resume against a job description and returns a 0–100 score, with a regex-based fallback when AI providers are down.",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server", "ADO.NET"],
    liveUrl: "https://your-resumecraft-demo-link.com",
    githubUrl: "https://github.com/zainab-f207/resumecraft-pro",
  },
  {
    slug: "safevision",
    title: "SafeVision — Crime Analytics for Lahore",
    description:
      "A crime analytics platform that maps and predicts incidents across Lahore. Trained a Random Forest model on over 25,000 FIR records across 31 areas, and built an Urdu FIR reader that combines Gemini 2.5 Flash, OCR, and fuzzy location matching.",
    tech: ["FastAPI", "Python", "React", "MySQL", "Leaflet"],
    liveUrl: "https://your-safevision-demo-link.com",
    githubUrl: "https://github.com/zainab-f207/safevision",
  },
];