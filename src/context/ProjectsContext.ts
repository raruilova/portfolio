"use client";
import { Projects } from "@/interfaces/projects";
import { ProjectResponse } from "@/interfaces/projectsResponse";
import { createContext } from "react";

interface ProjectsContextProps {
    projectsFiltered: Projects[],
    listProjects: Projects[]
}

export const ProjectsContext = createContext({} as ProjectsContextProps);