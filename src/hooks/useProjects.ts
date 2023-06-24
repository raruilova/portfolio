"use client";

import { ProjectsContext } from "@/context/ProjectsContext";
import { useContext } from "react";

export const useProjects = () => useContext(ProjectsContext);