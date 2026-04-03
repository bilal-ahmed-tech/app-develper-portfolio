import { useState } from "react";
import { projects } from "../../data/data";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import BtnOutline from "../ui/BtnOutline";

const filters = [
  { label: "All",          value: "all"     },
  { label: "Android",      value: "android" },
  { label: "iOS",          value: "ios"     },
];

const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category.includes(active)
  );

  return (
    <section id="projects" className="bg-bg-main py-16">
      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          subtitle="My Work"
          title="Recent"
          highlight="Projects"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 text-[clamp(0.8rem,1.5vw,0.95rem)] cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-primary to-primary-light text-white border-transparent shadow-md"
                    : "bg-transparent border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;