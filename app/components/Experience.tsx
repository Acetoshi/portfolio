import Job from "../components/Job";
import experience from "../data/experience.json";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>EXPÉRIENCES</h2>
      <ul>
        {experience.map((job) => (
          <li key={job.jobTitle}>
            <Job job={job} />
          </li>
        ))}
      </ul>
    </section>
  );
}
