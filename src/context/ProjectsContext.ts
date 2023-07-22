"use client";
import { ProjectImage } from "@/interfaces/projectImage";
import { Projects } from "@/interfaces/projects";
import { ProjectResponse } from "@/interfaces/projectsResponse";
import { createContext } from "react";

interface ProjectsContextProps {
    projectsFiltered: Projects[],
    listProjects: Projects[],
    //projectImage: ProjectImage[],
    //getProjectsImages: (repo:string) => void;
}

export const ProjectsContext = createContext({} as ProjectsContextProps);