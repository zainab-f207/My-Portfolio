import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../api/api";

const colors = ["bg-lavender/20", "bg-peach/20", "bg-mint/20"];

export default function ProjectCard({ project, index }) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem(`viewed-${project.slug}`);
    const run = async () => {
      try {
        if (!alreadyCounted) {
          const res = await api.post(`/projects/${project.slug}/view`);
          setViews(res.data.views);
          sessionStorage.setItem(`viewed-${project.slug}`, "true");
        } else {
          const res = await api.get(`/projects/${project.slug}`);
          setViews(res.data.views);
        }
      } catch (err) {
        console.error("View counter unavailable:", err);
      }
    };
    run();
  }, [project.slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`clay-card ${colors[index % 3]} p-6 flex flex-col`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <span className="flex items-center gap-1 text-xs font-mono font-medium bg-white/70 px-2 py-1 rounded-full border-2 border-plum/10 shrink-0 ml-2">
          <FaEye /> {views === null ? "…" : views}
        </span>
      </div>

      <p className="text-plum/70 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => <span key={t} className="tag-pill bg-white/70">{t}</span>)}
      </div>

      <div className="flex gap-3 text-sm font-semibold">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-full bg-white clay-btn text-xs">
            <FaExternalLinkAlt size={11} /> Live
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-full bg-white clay-btn text-xs">
            <FaGithub size={12} /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
