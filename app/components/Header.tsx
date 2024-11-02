"use client";
export default function Header() {

  function ScrollToSection(sectionClassName: string) {
    const section = document.getElementsByClassName(sectionClassName)[0];
    section.scrollIntoView({ behavior: "smooth" });
  }


  return (
    <header>
      <hgroup>
        <h1>
          <span className="title-hi">Hi, </span>{" "}
          <span className="title-name">i&apos;m David. </span>{" "}
          <span className="title-smiley"> :D</span>
        </h1>
        <h2 className="header-subtitle">
          Développeur web fort d&apos;une expérience en ingénierie, design
          industriel et management, je suis prêt à apporter ma curiosité et mes
          compétences à des projets nouveaux.
        </h2>
      </hgroup>
      <button className="bouncy-button" onClick={() => ScrollToSection("projects")}>
        <img src="/chevron-down.svg" alt="voir plus" />
      </button>
    </header>
  );
}
