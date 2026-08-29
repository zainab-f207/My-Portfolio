import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full clay-card bg-white mb-6 text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Open to work
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="font-display text-5xl md:text-7xl font-extrabold leading-[0.95] mb-4"
>
  Hey, I'm<br />
  <span className="text-plum">Zainab</span>{" "}
  <span className="relative inline-block">
    <span className="gradient-text">Fayyaz</span>
    <svg
      className="absolute -bottom-2 left-0 w-full"
      height="10"
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
    >
      <path d="M0,5 Q50,0 100,5 T200,5" stroke="#fb923c" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  </span>
</motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-lg text-plum/70 mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                "ASP.NET Core Developer", 1800,
                "Full-Stack Engineer", 1800,
                "React + Tailwind Builder", 1800,
                "EF Core & SQL Server", 1800,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-plum/70 text-base md:text-lg max-w-xl mb-8"
          >
            Full-stack web applications with .NET, React, and SQL — from secure APIs and databases to responsive, production-ready interfaces.
            <br />
Real-world projects spanning disaster response systems, AI-powered analytics, and intelligent ATS resume tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#projects" className="px-6 py-3 rounded-full bg-lavender clay-btn">
              View Projects
            </a>
            <a href="/Zainab_Fayyaz_Resume.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full bg-white clay-btn">
              <FaDownload size={12} /> Resume
            </a>
            <div className="flex gap-3 ml-2">
              <a href="https://github.com/zainab-f207" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white clay-btn"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/zainab-fayyaz-4a2958386" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white clay-btn"><FaLinkedin /></a>
              <a href="mailto:zainabfayyaz207@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white clay-btn"><FaEnvelope /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -top-6 -left-6 w-20 h-20 border-4 border-dashed border-plum/15 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-8 -right-4 w-16 h-16 bg-peach/30 rounded-2xl rotate-12 animate-wiggle" />

          <div className="relative clay-card bg-[#1e1830] overflow-hidden rounded-[2rem]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-coral" />
              <span className="w-3 h-3 rounded-full bg-gold" />
              <span className="w-3 h-3 rounded-full bg-mint" />
              <span className="ml-2 font-mono text-xs text-white/40">Developer.cs</span>
            </div>

            <div className="p-5 font-mono text-[13px] leading-relaxed">
              <p><span className="text-[#c586c0]">public class</span> <span className="text-[#4ec9b0]">Developer</span> {"{"}</p>
              <p className="pl-4"><span className="text-[#9cdcfe]">Name</span> = <span className="text-[#ce9178]">"Zainab Fayyaz"</span>;</p>
              <p className="pl-4"><span className="text-[#9cdcfe]">Role</span> = <span className="text-[#ce9178]">".NET Developer"</span>;</p>
              <p className="pl-4"><span className="text-[#9cdcfe]">Stack</span> = <span className="text-[#ce9178]">[</span></p>
              <p className="pl-8 text-[#ce9178]">"C#", "ASP.NET Core",</p>
              <p className="pl-8 text-[#ce9178]">"React", "SQL Server"</p>
              <p className="pl-4 text-[#ce9178]">];</p>
              <p className="pl-4">
                <span className="text-[#9cdcfe]">Status</span> = <span className="text-[#ce9178]">"Open to work"</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-2 h-4 bg-mint ml-1 align-middle"
                />
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-5 -left-8 clay-card bg-mint px-4 py-2 flex items-center gap-2"
          >
            <span className="font-mono text-xs font-bold">C# · .NET · React</span>
          </motion.div>

          <motion.a
            href="/Zainab_Fayyaz_Resume.pdf"
            download
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            title="Download Resume"
            className="absolute -top-4 -right-6 w-14 h-14 rounded-full bg-rose clay-btn flex items-center justify-center text-white"
          >
            <FaDownload />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}