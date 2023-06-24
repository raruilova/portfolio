import { ReactNode } from "react"
import { ProjectsContext } from "./ProjectsContext"
import { Projects } from "@/interfaces/projects";

interface ProjectsProviderProps {
    children: ReactNode

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

export const ProjectsProvider = ({ children }:ProjectsProviderProps) => {
  
    const projects = [
        {
          name: "Thankful Thoughts",
          description:
            "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
          image: "/images/thankfulthoughts.png",
          github: "https://github.com/hqasmei/thankful-thoughts",
          link: "https://thankfulthoughts.io/",
        },
        {
          name: "PlatoIO",
          description: "PlatoIO is a to do list app that built using the PERN stack.",
          image: "/images/platoio.png",
          github: "https://github.com/hqasmei/platoio",
          link: "https://platoio.com/register",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
        {
          name: "Kator Family Photos",
          description: "Kator Family Photos is a photos and video digitization service in the LA area.",
          image: "/images/familyphotos.png",
          github: "https://github.com/hqasmei/katorfamilyphotos",
          link: "https://katorfamilyphotos.com/",
        },
      ];
      const listProjects:Projects[] = projects.slice(0,5);
    return (
        <ProjectsContext.Provider value={{projects, listProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}