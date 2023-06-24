"use client";

import { ProjectsSection } from "@/components/ProjectsSection";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
    const {projects} = useProjects();
    return (
        <ProjectsSection listProjects={projects} />
    )
}

export default Projects;