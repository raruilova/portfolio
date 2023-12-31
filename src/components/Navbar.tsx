"use client";

import { navItem } from "@/interfaces/navIterface";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Link as Route } from "react-scroll/modules";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";

const NAV_ITEMS: navItem[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Acerca de mi",
    page: "about",
  },
  {
    label: "Proyectos",
    page: "projects",
  },
];

export const Nabvar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleDownloadCv = () => {
    fetch("Robinson_Ruilova_CV.pdf").then(response => {
      response.blob().then(blob => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = "Robinson_Ruilova_CV.pdf";
        alink.click();
      })
    })
  }

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 sticky top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="container flex items-center space-x-2">
              <Link href="/" className="text-2xl font-bold">
                Robinson Ruilova
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Route
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Route>
                );
              })}
              <button className="text-neutral-100 font-semibold px-3 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 mr-4 my-0"
              onClick={handleDownloadCv}
              >
                Descarga mi CV
              </button>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
