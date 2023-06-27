import { ReactNode, useEffect, useState } from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Projects } from "@/interfaces/projects";
import { ProjectResponse } from "@/interfaces/projectsResponse";
import { ProjectImage } from "@/interfaces/projectImage";

interface ProjectsProviderProps {
  children: ReactNode;
}

/**
 *
 * @param param0
 * @returns
 *
 * apis
 * https://api.github.com/users/raruilova/repos?per_page=6&sort=updated
 * https://raw.githubusercontent.com/raruilova/rick-and-morty/main/README.md
 * https://api.github.com/repos/raruilova/todo-app-typescript/contents/public/vite.svg
 */

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);

  const getProjects = async () => {
    const api1: string =
      "https://api.github.com/users/raruilova/repos?sort=updated";
    const res = await fetch(api1);
    const data: ProjectResponse[] = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const projectsFiltered: Projects[] = projects.map((project) => {
    return {
      name: project.name,
      description: project.description,
      image: `${project.url}/contents/src/preview/download_url`,
      github: project.url,
      link: String(project.homepage),
    };
  });

  const listProjects: Projects[] = projectsFiltered.slice(0, 5);
  return (
    <ProjectsContext.Provider value={{ projectsFiltered, listProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
