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
  //const [githubImage, setGithubImage] = useState<Array<ProjectImage>>([]);
  //const [projectImage, setProjectImage] = useState<ProjectImage[]>([]);
  //const [projectWithImage, setProjectWithImage] = useState<Projects[]>([]);

  const getProjects = async () => {
    const api1: string =
      "https://api.github.com/users/raruilova/repos?sort=updated";
    const res = await fetch(api1);
    const data: ProjectResponse[] = await res.json();
    setProjects(data);

    /** TODO */

    /*const githubPostImagesData:ProjectImage[] = await Promise.all(
      projects.map((post) => {
        const res = fetch(
          `https://api.github.com/repos/raruilova/${post.name}/contents/src/preview`
        );
        return res.then((i) => i.json());
      })
    );
    setGithubImage(githubPostImagesData);*/
  };

  useEffect(() => {
    getProjects();
  }, []);

  // TODO
  /*const githubProjectImage = githubImage.flatMap(img => img);
  const projectsWithImage = [...projects, ...githubProjectImage];

  console.log(projectsWithImage);*/

  const projectsFiltered: Projects[] = projects.map((project) => {
    return {
      name: project.name,
      description: project.description,
      image: "/images/bg.jpg",
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
