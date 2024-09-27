import Link from "next/link";

export default function Cheatsheets() {
  const cheatsheets = [
    {
      linkname: "TERMINAL & GIT",
      link: "https://cloud.disroot.org/s/iq89JPJENZCRb5e",
    },
    {
      linkname: "EXPRESS",
      link: "https://cloud.disroot.org/s/ECymM5SH8W368gB",
    },
    {
      linkname: "ANGULAR",
      link: "https://cloud.disroot.org/s/q98ZCRKbambZGD7",
    },
    {
      linkname: "JAVASCRIPT VANILLA",
      link: "https://cloud.disroot.org/s/noqgtoTrtcFHN6p",
    },
    {
      linkname: "TYPESCRIPT",
      link: "https://cloud.disroot.org/s/to234dTrneAGywH",
    },
    {
      linkname: "REACT JS",
      link: "https://cloud.disroot.org/s/MEiAStJco4P6qBo",
    },
    {
      linkname: "NEXT",
      link: "https://cloud.disroot.org/s/MLYDZSK567pamzd",
    },
    {
      linkname: "SECURITY",
      link: "https://cloud.disroot.org/s/HZi7J6XNrasyRYZ",
    },
    {
      linkname: "TDD/TESTS",
      link: "https://cloud.disroot.org/s/FSHTqNkD69KPDS7",
    },
  ];
  return (
    <main>
      <section className="projects">
        <h1>CHEATSHEETS</h1>
        <h2>FEEL FREE TO SHARE</h2>
        <ul>
          {cheatsheets.map((el) => (
            <li key={el.linkname}>
              <a href={el.link} target="_blank">
                {el.linkname}
              </a>
            </li>
          ))}
        </ul>
        <Link href='/'>Retour au portfolio</Link>
      </section>
      
    </main>
  );
}
