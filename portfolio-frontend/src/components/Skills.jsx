import { motion } from "framer-motion";
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFastapi,
  SiOpencv,
  SiSqlite,
  SiScikitlearn,
} from "react-icons/si";

import {
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const groups = [
  {
    title: "Languages",
    color: "bg-lavender/15",
    shadow: "shadow-clay",
    items: [
      { name: "C#", icon: SiSharp },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: FaDatabase },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "bg-peach/15",
    shadow: "shadow-clay-peach",
    items: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "ASP.NET Web API", icon: SiDotnet },
      { name: "EF Core", icon: FaServer },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SignalR", icon: FaCode },
      { name: "FastAPI", icon: SiFastapi },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    title: "Databases & Tools",
    color: "bg-mint/15",
    shadow: "shadow-clay-mint",
    items: [
      { name: "SQL Server", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Visual Studio", icon: FaLaptopCode },
      { name: "Vercel / Render", icon: FaServer },
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

        <div className="grid md:grid-cols-3 gap-6">
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

              <div className="grid grid-cols-2 gap-2.5">
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