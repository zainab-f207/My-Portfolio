import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCertificate, FaBullseye } from "react-icons/fa";

const facts = [
  { icon: FaGraduationCap, label: "Education", value: "BS CS, NUML Lahore" },
  { icon: FaCertificate, label: "Certified", value: "HEC NSCT — 88.1 percentile" },
  { icon: FaMapMarkerAlt, label: "Based in", value: "Lahore, Pakistan" },
  { icon: FaBullseye, label: "Focused on", value: "Data engineering" },
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
          className="clay-card p-8 md:p-10"
        >
          <p className="text-plum/75 leading-relaxed text-lg">
            I'm a Computer Science graduate from <strong>NUML, Lahore</strong>,
            moving from full-stack .NET development into{" "}
            <strong>data engineering</strong>. I've built four pipeline
            projects on real public data: a dbt star-schema warehouse, an AWS
            and Spark data lake, a Kafka and Spark streaming pipeline, and a
            capstone platform that ties them together with Airflow, tests and
            monitoring.
          </p>
          <p className="text-plum/75 leading-relaxed text-lg mt-4">
            Each project documents its design decisions, validation checks and
            known limitations. My internship at <strong>SimpleLogix</strong>{" "}
            and my full-stack and machine-learning projects mean I'm
            comfortable on the application side of the data too. Both are
            below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clay-card p-6 flex flex-col justify-center gap-5"
        >
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,#8b5cf6,#f472b6)" }}
              >
                <f.icon size={16} />
              </div>
              <div>
                <p className="text-xs text-plum/60 font-medium">{f.label}</p>
                <p className="font-display font-bold text-plum">{f.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
