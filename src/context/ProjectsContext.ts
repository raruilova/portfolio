"use client";
import { ProjectImage } from "@/interfaces/projectImage";
import { Projects } from "@/interfaces/projects";
import { ProjectResponse } from "@/interfaces/projectsResponse";
import { createContext } from "react";

interface ProjectsContextProps {
    getProjects: (api:string) => void
    projectsFiltered: Projects[],
    listProjects: Projects[],
}

export const ProjectsContext = createContext({} as ProjectsContextProps);