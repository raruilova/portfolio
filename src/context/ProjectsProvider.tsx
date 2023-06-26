import { ReactNode, useEffect, useState } from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Projects } from "@/interfaces/projects";
import { ProjectResponse } from "@/interfaces/projectsResponse";

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
    const api: string ="https://api.github.com/users/raruilova/repos?sort=updated";
    const res = await fetch(api);
    const data: ProjectResponse[] = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const projectsFiltered = projects.map(project => {
    return {
      name: project.name,
      description: project.description,
      image: project.owner.avatar_url,
      github: project.url,
      link: project.homepage,
    }
  });

  const listProjects: Projects[] = projectsFiltered.slice(0, 5);
  return (
    <ProjectsContext.Provider value={{ projects, listProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
