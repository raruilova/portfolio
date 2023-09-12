"use client";
import React from "react";
import { Projects } from "@/interfaces/projects";
import { useRouter } from "next/navigation";
import { ProjectItem } from "./ProjectItem";

interface ProjectsSectionProps {
  listProjects: Projects[];
}

export const ProjectsSection = ({ listProjects }: ProjectsSectionProps) => {
  const router = useRouter();
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {listProjects.map((project, idx) => {
          return <ProjectItem project={project} key={idx} />;
        })}
      </div>
      {listProjects.length <= 5 && (
        <button
          onClick={() => router.push("/projects")}
          className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 mx-auto my-4"
        >
          Más proyectos..
        </button>
      )}
    </section>
  );
};
