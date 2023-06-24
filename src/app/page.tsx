"use client";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useProjects } from "@/hooks/useProjects";

export default function Home() {
  const { projects, listProjects } = useProjects();
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection listProjects={listProjects.length <= 5 ? listProjects : projects }/>
    </main>
  );
}
