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

  const getProjects = async (): Promise<void> => {
    try {
      const api1: string =
        "https://api.github.com/users/raruilova/repos?sort=updated";
      const res = await fetch(api1);
      const data: ProjectResponse[] = await res.json();
      const api2: string =
        "https://api.github.com/users/raruilova/repos?type=member";
      const res2 = await fetch(api2);
      const data2: ProjectResponse[] = await res2.json();
      const project: ProjectResponse[] = [...data, ...data2];
      setProjects(project);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const projectsFiltered: Projects[] = projects.map((project) => {
    return {
      name: project.name.includes("-")
        ? project.name[0].toUpperCase() +
          project.name.slice(1).toLowerCase().split("-").join(" ")
        : project.name.includes("_")
        ? project.name[0].toUpperCase() +
          project.name.slice(1).toLowerCase().split("_").join(" ")
        : project.name,
      description: project.description,
      image: "/images/bg.jpg",
      github: project.svn_url,
      link: String(project.homepage),
    };
  });

  const listProjects: Projects[] = projectsFiltered.slice(0, 5);
  return (
    <ProjectsContext.Provider
      value={{ getProjects, projectsFiltered, listProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
