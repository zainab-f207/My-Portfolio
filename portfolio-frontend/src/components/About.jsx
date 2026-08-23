import { motion } from "framer-motion";

const stats = [
  { value: "25,440", label: "FIR records analyzed", color: "bg-lavender/20" },
  { value: "47", label: "responder orgs mapped", color: "bg-peach/20" },
  { value: "10", label: "resume templates built", color: "bg-mint/20" },
  { value: "88.1%", label: "HEC NSCT percentile", color: "bg-sky/20" },
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <span className="section-tag">01 · About</span>
      <h2 className="section-heading mb-10">A bit about me</h2>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clay-card bg-white p-8 md:p-10"
        >
          <p className="text-plum/75 leading-relaxed text-lg">
            I'm a Computer Science graduate from <strong>NUML, Lahore</strong>,
            and a .NET developer who'd rather ship something real than
            polish another tutorial project. During my internship at{" "}
            <strong>SimpleLogix</strong>, I built full-stack features with
            .NET Framework, C#, Entity Framework, and SQL Server — writing
            APIs, fixing real bugs, and learning how teams actually ship
            code through Agile sprints.
          </p>
          <p className="text-plum/75 leading-relaxed text-lg mt-4">
            Outside of work, I build things that solve real problems: a
            disaster-response platform, an ATS-scoring resume builder, and
            a crime-analytics dashboard for Lahore — all below.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`clay-card ${s.color} p-5 flex flex-col justify-center`}
            >
              <p className="font-display text-2xl font-extrabold text-plum">{s.value}</p>
              <p className="text-xs text-plum/70 mt-1 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}