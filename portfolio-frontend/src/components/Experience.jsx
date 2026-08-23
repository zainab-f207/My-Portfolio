import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const points = [
  "Built and maintained full-stack apps using .NET Framework, C#, Entity Framework, and SQL Server.",
  "Developed and integrated REST APIs connecting frontend and backend components.",
  "Implemented CRUD operations with Entity Framework across multiple app features.",
  "Took part in code reviews, debugging, and daily stand-ups in an Agile/Scrum team.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <span className="section-tag">03 · Experience</span>
      <h2 className="section-heading mb-10">Where I've worked</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="clay-card bg-white p-8 md:p-10"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-lavender/30 flex items-center justify-center text-lg shrink-0">
            <FaBriefcase />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between gap-2 mb-4">
              <h3 className="font-display text-xl font-bold">Full Stack Web Developer Intern</h3>
              <span className="tag-pill">Jul 2025 – Oct 2025</span>
            </div>
            <p className="text-plum/60 font-medium mb-4">SimpleLogix, Lahore</p>
            <ul className="space-y-2">
              {points.map((p, i) => (
                <li key={i} className="text-plum/70 text-sm flex gap-2">
                  <span className="text-mint font-bold">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}