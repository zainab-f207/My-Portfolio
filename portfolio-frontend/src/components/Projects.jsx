import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const groups = [
  { key: "data", title: "Data engineering" },
  { key: "app", title: "Full-stack & machine learning" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <span className="section-tag">04 · Projects</span>
      <h2 className="section-heading mb-10">Things I've built</h2>

      {groups.map((g) => (
        <div key={g.key} className="mb-12 last:mb-0">
          <h3 className="font-display text-xl font-bold text-plum mb-5">{g.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.category === g.key)
              .map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
