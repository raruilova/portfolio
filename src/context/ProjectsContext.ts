"use client";
import { Projects } from "@/interfaces/projects";
import { createContext } from "react";

interface ProjectsContextProps {
    projects: Projects[],
    listProjects: Projects[]
}

export const ProjectsContext = createContext({} as ProjectsContextProps);