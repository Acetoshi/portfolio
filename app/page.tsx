import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/header.css";
import "./styles/projects.css";
import "./styles/card.css";
import "./styles/experience.css";
import "./styles/skills.css";
import "./styles/contact.css";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
