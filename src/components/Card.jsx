import { useState } from "react";

function Card({ project }) {
  const [displayedImg, setDisplayedImg] = useState(project.screenshots.length);
  return (
    <article className="card">
      <figure>
        <a href={project.url} target="_blank">
          <img
            src={project.screenshots[0]}
            alt={"Capture ecran de" + project.name}
          />
        </a>
      </figure>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <section className="tags-section">
        {project.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </section>

      <section className="buttons-section">
        <button role="button" className="button-to-website">
          <a href={project.url} target="_blank">
            Voir le site
          </a>
        </button>
        <button role="button" className="button-to-github">
          <a href={project.repo_url} target="_blank">
            Voir le code
          </a>
        </button>
      </section>
    </article>
  );
}
export default Card;
