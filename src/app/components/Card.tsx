type Project = {
  name: string;
  url: string;
  repo_url: string;
  description: string;
  tags: string[];
};

export default function Card({ project }: { project: Project }) {
  return (
    <article className="card">
      <section className="project-info-section">
        <h3>
          <a href={project.url} target="_blank">
            {project.name}
          </a>
        </h3>
        <p>{project.description}</p>

        <section className="tags-section">
          {project.tags.map((tag) => (
            <p key={`${project.name}-${tag}`} className="tag">
              {tag}
            </p>
          ))}
        </section>
      </section>

      <section className="buttons-section">
        <a className="link-to-github" href={project.repo_url} target="_blank">
          VOIR LE CODE
        </a>
        <a className="link-to-website" href={project.url} target="_blank">
          VOIR L'APP
        </a>
      </section>
    </article>
  );
}
