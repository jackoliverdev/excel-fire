"use client";

import { useState } from "react";
import type { Project, SectorId } from "@/lib/projects";
import { ProjectCard } from "@/components/Projects/ProjectCard";

type Filter = { id: SectorId | "all"; label: string };

const filters: Filter[] = [
  { id: "all", label: "All projects" },
  { id: "social-housing", label: "Social housing" },
  { id: "commercial", label: "Commercial, venues & transport" },
  { id: "main-contractors", label: "Main contractors" },
  { id: "education", label: "Student accommodation" },
];

/** Project grid with sector filters. Every card is rendered on the server pass, so all links are crawlable. */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter["id"]>("all");
  const visible = active === "all" ? projects : projects.filter((project) => project.sectors.includes(active));
  const available = filters.filter(
    (filter) => filter.id === "all" || projects.some((project) => project.sectors.includes(filter.id as SectorId)),
  );

  return (
    <div>
      <div role="group" aria-label="Filter projects by sector" className="-mx-6 mb-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0">
        {available.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-brand-accent bg-brand-accent text-white"
                  : "border-[var(--border)] bg-[var(--surface-nav-panel)] text-[var(--text-muted)] hover:border-brand-accent hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} headingLevel="h2" />
        ))}
      </div>
    </div>
  );
}
