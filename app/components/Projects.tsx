import Card from "./Card";
import projects from "../data/projects.json"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>PROJETS</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.name}>
            <Card project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
