// portfolio-frontend/src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const l of links) {
        const el = document.getElementById(l.id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            setActive(l.id);
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-3xl"
    >
      <div
        className={`px-3 py-2 flex items-center justify-between rounded-full border-2 border-plum/15 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-xl shadow-clay"
            : "bg-cream/70 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="w-9 h-9 flex items-center justify-center rounded-full font-display font-extrabold text-sm text-white shrink-0"
          style={{
            background: "linear-gradient(135deg,#8b5cf6,#f472b6)",
          }}
        >
          ZF
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative px-4 py-2 text-sm font-semibold rounded-full"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background:
                      "linear-gradient(135deg,#8b5cf6,#f472b6)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={
                  active === l.id ? "text-white" : "text-plum/70"
                }
              >
                {l.label}
              </span>
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Resume Download */}
          <a
            href="/Zainab_Fayyaz_Data_Engineer_CV.pdf"
            download
            title="Download Data Engineering CV"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-mint clay-btn text-plum"
          >
            <FaDownload size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full clay-btn bg-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            className="clay-card mt-2 p-2 md:hidden bg-cream"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl font-semibold text-sm hover:bg-lavender/10"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}