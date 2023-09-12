"use client";

import { ProjectsSection } from "@/components/ProjectsSection";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { projectsFiltered } = useProjects();

  return <ProjectsSection listProjects={projectsFiltered} />;
};

export default Projects;
