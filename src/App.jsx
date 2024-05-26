import { useState } from "react";
import Card from "./components/Card";
import projects from "./projects.json";
import "./styles/global.css";
import Skills from "./components/Skills";

function ScrollToSection(sectionClassName) {
  const section = document.getElementsByClassName(sectionClassName)[0];
  section.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button role="button" onClick={()=>ScrollToSection("projects")}>Projets</button>
          </li>
          <li>
            <button role="button" onClick={()=>ScrollToSection("skills")}>Compétences</button>
          </li>
          <li>
            <button role="button" onClick={()=>ScrollToSection("experience")}>Expériences</button>
          </li>
          <li>
            <button role="button" onClick={()=>ScrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
      <header>
        <hgroup>
          <h1>Hi, i'm David. :D</h1>
          <p>
            Développeur web fort d'une expérience en ingénierie, design
            industriel et management, je suis prêt à apporter ma curiosité et ma
            capacité à apprendre à des projets nouveaux.
          </p>
        </hgroup>
      </header>
      <main>
        <section className="projects">
          <h2>PROJETS</h2>
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.name}>
                <Card project={project} />
              </li>
            ))}
          </ul>
        </section>

        <Skills />

        <section className="experience">
          <h2>EXPERIENCES</h2>
        </section>

        <section className="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>
              <a href="https://github.com/Acetoshi" target="_blank">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://github.com/Acetoshi" target="_blank">
                GITHUB
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
