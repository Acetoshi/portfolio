import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Job from "./components/Job";

import experience from "./experience.json";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <header>
          <hgroup>
            <h1>Hi, i&apos;m David. :D</h1>
            <p>
              Développeur web fort d&apos;une expérience en ingénierie, design
              industriel et management, je suis prêt à apporter ma curiosité et
              mes compétences à des projets nouveaux.
            </p>
          </hgroup>
        </header>

        <Projects />

        <Skills />

        <section className="experience">
          <h2>EXPÉRIENCES</h2>
          <ul>
            {experience.map((job) => (
              <li key={job.jobTitle}>
                <Job job={job} />
              </li>
            ))}
          </ul>
        </section>

        <section className="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/davidlegall/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://github.com/Acetoshi" target="_blank">
                GITHUB
              </a>
            </li>
            <li>
              <a href="https://www.codewars.com/users/Acetoshi" target="_blank">
                CODEWARS
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
