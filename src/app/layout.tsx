"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nabvar } from "@/components/Navbar";
import { ProjectsProvider } from "@/context/ProjectsProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <ProjectsProvider>
            <Nabvar />
            {children}
            <Footer />
          </ProjectsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
