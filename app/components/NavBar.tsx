"use client";
import { useState } from "react";
export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function ScrollToSection(sectionClassName: string) {
    const section = document.getElementsByClassName(sectionClassName)[0];
    section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => toggleMenu(), 600);
  }

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
      <button
        role="button"
        className="nav-menu-button"
        onClick={toggleMenu}
        aria-label={
          isCollapsed
            ? "ouvrir le menu de navigation"
            : "fermer le menu de navigation"
        }
      >
        <div className="nav-menu-button-top-bar"></div>
        <div className="nav-menu-button-middle-bar"></div>
        <div className="nav-menu-button-bottom-bar"></div>
      </button>
      <menu>
        <li>
          <button role="button" onClick={() => ScrollToSection("projects")}>
            Projets
          </button>
        </li>
        <li>
          <button role="button" onClick={() => ScrollToSection("skills")}>
            Compétences
          </button>
        </li>
        <li>
          <button role="button" onClick={() => ScrollToSection("experience")}>
            Expériences
          </button>
        </li>
        <li>
          <button role="button" onClick={() => ScrollToSection("contact")}>
            Contact
          </button>
        </li>
      </menu>
    </nav>
  );
}
