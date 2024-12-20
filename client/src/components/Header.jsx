import React, { useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
    const themeToggleDarkIcon = useRef(null);
    const themeToggleLightIcon = useRef(null);
    const themeToggleBtn = useRef(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("color-theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.setAttribute("data-mode", "dark");
            themeToggleLightIcon.current.classList.remove("hidden");
        } else {
            document.documentElement.setAttribute("data-mode", "light");
            themeToggleDarkIcon.current.classList.remove("hidden");
        }

        const toggleTheme = () => {
            themeToggleDarkIcon.current.classList.toggle("hidden");
            themeToggleLightIcon.current.classList.toggle("hidden");

            if (document.documentElement.getAttribute("data-mode") === "dark") {
                document.documentElement.setAttribute("data-mode", "light");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.setAttribute("data-mode", "dark");
                localStorage.setItem("color-theme", "dark");
            }
        };

        themeToggleBtn.current.addEventListener("click", toggleTheme);

        return () => themeToggleBtn.current.removeEventListener("click", toggleTheme);
    }, []);


    return (
        <header className="flex justify-around bg-slate-100 dark:bg-gray-900 pt-3 pb-3 items-center">
            <button
                ref={themeToggleBtn}
                id="theme-toggle"
                type="button"
                className="text-black dark:text-gray-400 text-sm p-2.5"
            >
                <svg
                    ref={themeToggleDarkIcon}
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                    ref={themeToggleLightIcon}
                    id="theme-toggle-light-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <p className="text-black dark:text-gray-400 text-xl">Expenses</p>
            {/*<AiOutlineMenu className="text-black dark:text-gray-400"/>*/}
            <svg className="text-black dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                <path d="M7 12h14l-3 -3m0 6l3 -3"/>
            </svg>
        </header>
    );
}

export default Header;
