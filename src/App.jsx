import { useState } from "react";
import Card from "./components/Card";
import projects from "./projects.json";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button role="button">Projets</button>
          </li>
          <li>
            <button role="button">Compétences</button>
          </li>
          <li>
            <button role="button">Expériences</button>
          </li>
          <li>
            <button role="button">Contact</button>
          </li>
        </ul>
      </nav>
      <header>
        <hgroup>
          <h1>Hi, i'm David</h1>
          <p>
            Développeur web fort d'une expérience en
            ingénierie, design industriel et management, je suis prêt à
            apporter ma curiosité et ma capacité à apprendre à des projets
            nouveaux.
          </p>
        </hgroup>
      </header>
      <main>
        <section className="projects">
          <h2>Projets</h2>
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.name}>
                <Card project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="skills">
          <h2>Compétences</h2>
        </section>

        <section className="experience">
          <h2>Expériences</h2>
        </section>

        <section className="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
