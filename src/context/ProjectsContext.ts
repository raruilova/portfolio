"use client";
import { Projects } from "@/interfaces/projects";
import { createContext } from "react";

interface ProjectsContextProps {
    getProjects: (api:string) => void
    projectsFiltered: Projects[],
    listProjects: Projects[],
}

export const ProjectsContext = createContext({} as ProjectsContextProps);