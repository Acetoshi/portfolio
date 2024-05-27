import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects"

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
        </section>

        <section className="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/davidlegall/" target="_blank">
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
