import { useState } from "react";
import Card from "./components/Card";
import projects from "./projects.json";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h2>David LE GALL - Portfolio</h2>
        <ul>
          <li>
            <button role="button">Mes Projets</button>
          </li>
          <li>
            <button role="button">Mon Parcours</button>
          </li>
          <li>
            <button role="button">Me contacter</button>
          </li>
        </ul>
      </nav>
      <header>
        <p>
          Developpeur Web passionné par les défis techniques et la créativité,
          je suis prêt à apporter ma polyvalence et mon envie d'apprendre à de
          nouveaux projets web excitants ! Ingénieur mécanique passé par le
          design industriel, la transition numérique, la facilitation et la
          vente technique, je me lance dans le développement web React.
        </p>
      </header>
      <main>
        <section className="projects">
          <h2>Mes projets</h2>
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.name}>
                <Card project={project} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
