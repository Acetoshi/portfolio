"use client";

export default function NavBar() {
    
  function ScrollToSection(sectionClassName: string) {
    const section = document.getElementsByClassName(sectionClassName)[0];
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav>
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
