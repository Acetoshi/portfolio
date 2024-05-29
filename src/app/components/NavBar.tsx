"use client";
import { useState } from "react";
export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function ScrollToSection(sectionClassName: string) {
    const section = document.getElementsByClassName(sectionClassName)[0];
    section.scrollIntoView({ behavior: "smooth" });
  }

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
      <button role="button" className="nav-menu-button" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul>
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
      </ul>
    </nav>
  );
}
