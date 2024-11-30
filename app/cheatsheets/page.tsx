import cheatsheets from "../data/cheatsheets.json"

export default function Cheatsheets() {
  return (
    <>
      <main>
        <section className="projects">
          <h1>CHEATSHEETS</h1>
          <h2>FEEL FREE TO SHARE</h2>
          <ul>
            {cheatsheets.map((cheatsheet) => (
              <li key={cheatsheet.linkname}>
                <a href={cheatsheet.link} target="_blank">
                  {cheatsheet.linkname}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
