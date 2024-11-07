import { useLocation, useMatches, useRouteLoaderData } from "@remix-run/react";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import { ForwardedRef, ReactNode, useEffect, useRef, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CgMoon, CgSun } from "react-icons/cg";
import SidebarList from "~/components/sidebar_list";
import useDarkMode from "~/contexts/states/dark_mode";

export type PageInfo = {
  pageTitle: string;
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const data = useMatches();
  const { isDarkMode, setDarkMode } = useDarkMode();
  const [menuShown, setMenuShown] = useState(false);
  const { pageInfo } =
    useRouteLoaderData<{ pageInfo: PageInfo }>(data[data.length - 1].id) || {};
  const container = useRef<OverlayScrollbarsComponentRef<"div">>();
  const location = useLocation();

  useEffect(() => {
    container.current?.osInstance()?.elements().viewport.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <div className="bg-gray-300 dark:bg-slate-900 h-screen flex flex-col p-0 lg:p-8">
        <OverlayScrollbarsComponent
          ref={container as ForwardedRef<OverlayScrollbarsComponentRef<"div">>}
          className="flex-1 bg-gray-200 dark:bg-gray-900 rounded-none lg:rounded-l-md border-0 lg:border border-gray-400 border-r-0 dark:border-slate-700 overflow-auto relative mt-16 lg:mt-0 mr-0 lg:mr-20"
        >
          <div className="absolute top-0 left-0 right-0 px-5 py-8 lg:p-12">
            <div className="head-overlay-bg"></div>
            {children}
            <footer className="bg-gray-100 dark:bg-slate-800 border-t border-gray-300 dark:border-slate-700 py-5 px-12 -mx-5 lg:-mx-12 -mb-12 mt-16 text-right flex flex-col lg:flex-row justify-between items-center">
              <span>2024 &copy; Akbar Aditama &mdash; All Right Reserved</span>
              <span className="text-cyan-800 dark:text-blue-400">
                www.akbaraditama.com
              </span>
            </footer>
          </div>
        </OverlayScrollbarsComponent>
      </div>
      <header className="fixed top-0 left-0 right-0 bottom-auto lg:left-auto lg:top-8 lg:right-8 lg:bottom-8 bg-gray-100 dark:bg-slate-800 rounded-none lg:rounded-r-md border-0 border-b lg:border border-gray-400 dark:border-slate-700 overflow-x-hidden">
        <div
          className={`relative flex flex-row lg:flex-col items-stretch lg:items-center h-16 lg:h-full transition-all w-full ${
            menuShown ? "lg:w-64" : "lg:w-20"
          }`}
        >
          <button
            type="button"
            className={`w-auto lg:w-full text-gray-700 dark:text-white flex items-center py-3 lg:py-5 px-3 text-2xl bg-gray-200 dark:bg-slate-700 ${
              menuShown ? "justify-start" : "justify-center"
            }`}
            onClick={() => setMenuShown((val) => !val)}
          >
            {menuShown ? <BiX /> : <BiMenu />}
            <span
              className={`text-sm ml-3 hidden ${
                menuShown ? "lg:block" : "lg:hidden"
              }`}
            >
              MENU
            </span>
          </button>
          <nav className="flex-1 relative w-full">
            <div className="text-slate-500 dark:text-gray-400 uppercase tracking-widest font-ubuntu aspect-auto lg:aspect-square flex justify-start items-center transform rotate-0 lg:rotate-90  text-sm h-full lg:h-auto p-5">
              {pageInfo?.pageTitle}
            </div>
            <ul
              className={`transition p-5 fixed lg:absolute lg:top-0 left-0 w-full lg:w-64 h-full bg-gray-100 dark:bg-slate-800 mt-[1px] transform ${
                menuShown
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full lg:translate-x-full opacity-100"
              }`}
            >
              <SidebarList onClick={() => setMenuShown(false)} to="/">
                Beranda
              </SidebarList>
              <SidebarList onClick={() => setMenuShown(false)} to="/history">
                Histori
              </SidebarList>
              <SidebarList
                onClick={() => setMenuShown(false)}
                to="/project"
                title="Project"
              >
                Project
              </SidebarList>
              <SidebarList onClick={() => setMenuShown(false)} to="/blog">
                Blog
              </SidebarList>
              <SidebarList onClick={() => setMenuShown(false)} to="/contact">
                Kontak
              </SidebarList>
            </ul>
          </nav>
          <div
            className={`w-auto lg:w-full flex p-5 items-center ${
              menuShown ? "justify-between" : "justify-center"
            }`}
          >
            <button
              onClick={() => setDarkMode((val) => !val)}
              type="button"
              className="w-10 bg-gray-300 dark:bg-slate-700 border border-gray-400 hover:border-blue-600 dark:border-slate-900 hover:dark:border-blue-500 rounded-full p-0.5"
            >
              <div
                className={`aspect-square w-1/2 rounded-full bg-white dark:bg-slate-800 flex justify-center items-center text-xs text-gray-600 dark:text-gray-200 transition transform ${
                  isDarkMode ? "translate-x-full" : "translate-x-0"
                }`}
              >
                {isDarkMode ? <CgMoon /> : <CgSun />}
              </div>
            </button>
            <span
              className={`text-xs font-light whitespace-nowrap hidden ${
                menuShown ? "lg:block" : "lg:hidden"
              }`}
            >
              MODE GELAP
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
