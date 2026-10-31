import { motion } from "framer-motion";
import {
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiApacheparquet,
  SiDocker,
  SiSharp,
  SiDotnet,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFastapi,
  SiScikitlearn,
} from "react-icons/si";

import {
  FaDatabase,
  FaServer,
  FaCloud,
  FaCogs,
  FaProjectDiagram,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";

const groups = [
  {
    title: "Data Engineering",
    color: "bg-lavender/15",
    shadow: "shadow-clay",
    items: [
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Apache Spark", icon: SiApachespark },
      { name: "dbt Core", icon: FaLayerGroup },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Parquet", icon: SiApacheparquet },
      { name: "Star schemas", icon: FaProjectDiagram },
      { name: "Data quality tests", icon: FaCogs },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    title: "Cloud & Databases",
    color: "bg-peach/15",
    shadow: "shadow-clay-peach",
    items: [
      { name: "AWS S3", icon: FaCloud },
      { name: "AWS Athena", icon: FaCloud },
      { name: "Azure Blob", icon: FaCloud },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Languages & Tools",
    color: "bg-mint/15",
    shadow: "shadow-clay-mint",
    items: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
      { name: "C#", icon: SiSharp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Application Development",
    color: "bg-lavender/15",
    shadow: "shadow-clay",
    items: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "EF Core", icon: FaServer },
      { name: "REST APIs", icon: FaCode },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "FastAPI", icon: SiFastapi },
      { name: "scikit-learn", icon: SiScikitlearn },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-white/60 -skew-y-2 -z-[1] border-y-2 border-plum/5" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <span className="section-tag">02 · Skills</span>
        <h2 className="section-heading mb-10">What I work with</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`clay-card ${g.color} ${g.shadow} p-6`}
            >
              <h3 className="font-display font-bold text-lg mb-5 text-plum">
                {g.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {g.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2.5 border-2 border-plum/10 hover:border-lavender/40 transition-colors"
                  >
                    <item.icon className="text-base shrink-0 text-plum/80" />

                    <span className="font-mono text-xs font-medium text-plum">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
