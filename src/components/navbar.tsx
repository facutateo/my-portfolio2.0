import { useTranslation } from "../hooks/useTranslation";
import BotonLenguage from "./button-lenguage";
import ButtonMode from "./button-mode";
import { useActiveSection }  from "../hooks/useActiveSection";
import { useState } from "react";


function Navbar() {
  const {t} = useTranslation()
  const activeSection = useActiveSection(["home","about", "skills", "projects", "contact"]);
  const [isOpen, setIsOpen] = useState(false)

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "!text-(--selected-color) text-shadow:0_0_8px_(--div-background-color),0_0_16px_(--div-background-color)] animate-pulse animate-iteration-count-infinite"
      : "";
  };
  return (
    <nav className= "h-20 bg-(--background-color) px-6 flex items-center justify-between shadow-blue-800/30 shadow-md sticky top-0 z-50 backdrop-blur-md animate-slide-in-top">
      <div className="flex justify-start">
      <div className="w-24 h-10 flex items-center">
        <a href="#home">
        <img src="ft-full.png"alt="logo" className="hover:animate-pulse hover:animate-iteration-count-infinite cursor-pointer" />
        </a>
      </div>
      </div>
      <div className={`fixed md:static top-20 left-0 w-full md:w-auto bg-(--background-color) md:bg-transparent flex-col md:flex-row flex items-center justify-center gap-4 md:gap-6 p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen? "opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}`}>
        <a className={`p-4 hover:animate-rotational-wave cursor-pointer text-lg md:text-base ${getLinkClass("about")}`} onClick={() => setIsOpen(false)} href="#about">{t("about")}</a>
        <a className={`p-4 hover:animate-rotational-wave cursor-pointer text-lg md:text-base ${getLinkClass("skills")}`} onClick={() => setIsOpen(false)} href="#skills">{t("skills")}</a>
        <a className={`p-4 hover:animate-rotational-wave cursor-pointer text-lg md:text-base ${getLinkClass("projects")}`} onClick={() => setIsOpen(false)} href="#projects">{t("projects")}</a>
        <a className={`p-4 hover:animate-rotational-wave cursor-pointer text-lg md:text-base ${getLinkClass("contact")}`} onClick={() => setIsOpen(false)} href="#contact">{t("contact")}</a>
        </div>
        <div className="flex justify-end items-center gap-3" >
          <div className="rounded-xl border border-(--div-background-color) items-center gap-2 shadow-blue-800/30 flex p-2 bg-(--background-color)">
            <ButtonMode />
            <BotonLenguage />
            </div>
            <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-(--text-color) focus:outline-none border-none hover:bg-(--div-background-color)/20"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
        </div>
    </nav>
  );
}
export default Navbar;
