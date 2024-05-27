type Job = {
  company: string;
  jobTitle: string;
  duration: string;
  jobDescription: string[];
};

export default function Card({ job }: { job: Job }) {
  return (
    <article className="job-card">
      <h3>{job.jobTitle.toUpperCase()}</h3>
      <p>{`${job.company.toUpperCase()}  -  ${job.duration.toUpperCase()}`}</p>
      <ul>
        {job.jobDescription.map((el: string, index: number) => (
          <li key={index + el}>{el}</li>
        ))}
      </ul>
    </article>
  );
}
