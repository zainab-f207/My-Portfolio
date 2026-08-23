import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import Section from "./Section";

export default function Resume() {
  return (
    <Section id="resume" tone="b">
      <p className="section-tag">// 05 — resume</p>
      <h2 className="section-heading mb-10">Want the full picture?</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="panel panel-hover p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-mint/10 flex items-center justify-center text-mint text-2xl shrink-0">
            <FaFilePdf />
          </div>

          <div>
            <p className="font-display text-lg font-bold text-white">
              Zainab_Fayyaz_Resume.pdf
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Full experience, education, and project details in one page.
            </p>
          </div>
        </div>

        <a
          href="/Zainab_Fayyaz_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-mint text-black font-bold font-mono text-sm hover:bg-mint/80 transition-colors shrink-0"
        >
          <FaDownload size={13} /> Download
        </a>
      </motion.div>
    </Section>
  );
}