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
  const [githubImage, setGithubImage] = useState<Array<string>>([]);
  const [projectImage, setProjectImage] = useState<ProjectImage[]>([]);

  const getProjects = async () => {
    const api1: string =
      "https://api.github.com/users/raruilova/repos?sort=updated";
    const res = await fetch(api1);
    const data: ProjectResponse[] = await res.json();
    setProjects(data);

    const githubPostImagesData = await Promise.all(
      projects.map((post) => {
        return fetch(
          `https://api.github.com/repos/raruilova/${post.name}/contents/src/preview`
        )
      })
    );
    setGithubImage(githubPostImagesData.map(i => i.url));
  };

  /*const getProjectsImages = githubImage.map(async (img) => {
    const res = await fetch(img);
    const data = res.json();
    console.log(data.then(i => console.log(i)))

  })*/

 

  useEffect(() => {
    getProjects();
  }, []);

  /*const getProjectsImages = await (repo: string) => {
    const api2: string = 
    const res2 = await fetch(api2);
    const data2: ProjectImage = await res2.json();
    setProjectImage([...projectImage, data2]);
  };*/

  const projectsFiltered: Projects[] = projects.map((project) => {
    return {
      name: project.name,
      description: project.description,
      image: "/thankfulthoughts.png",
      github: project.url,
      link: String(project.homepage),
    };
  });
  

  const listProjects: Projects[] = projectsFiltered.slice(0, 5);
  return (
    <ProjectsContext.Provider
      value={{ projectsFiltered, listProjects, projectImage }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
