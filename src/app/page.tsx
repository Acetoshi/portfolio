import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
