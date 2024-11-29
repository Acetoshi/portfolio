"use client";
import { useState } from "react";
import { comparePerformance } from "./code-comparator";

import NavBar from "../components/NavBar";
import "../styles/codeCompare.css";
import CodeInterface from "./CodeInterface";

export default function CodeComparator() {
  const codeStringA = `
  const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
  let sum = 0;
  
  arr.forEach((item) => {
    sum += item;
  });

  console.log(sum); // Output: 500500
  `;

  const codeStringB = `
let arr = [];
for (let i = 1; i <= 1000; i++) {
  arr.push(i);
}
let sum = 0;

arr.forEach((item) => {
  sum += item;
});

console.log(sum); // Output: 500500
`
  const [winner, setWinner] = useState<number | null>(null);
  const [codeA, setCodeA] = useState<string>(codeStringA);
  const [consoleOutputA, setConsoleOutputA] = useState<string[]>([]);
  const [codeB, setCodeB] = useState<string>(codeStringB);
  const [consoleOutputB, setConsoleOutputB] = useState<string[]>([]);

  const handleCompare = () => {
    try {
      const {
        time1,
        time2,
        winner: faster,
        output1,
        output2,
      } = comparePerformance(codeA, codeB);

      output1.push(`\nExecution Time: ${time1.toFixed(2)} ms`);
      output2.push(`\nExecution Time: ${time2.toFixed(2)} ms`);

      setConsoleOutputA(output1);
      setConsoleOutputB(output2);

      setWinner(faster);
    } catch {
      // setResult(`<p style="color: red;">Error: ${error.message}</p>`);
    }
  };

  console.log(codeA);

  return (
    <>
      <NavBar />
      <main style={{ padding: "20px", paddingTop: "10vh" }}>
        <h1 className="flex-centered">Compare JavaScript Efficiency</h1>
        <section className="code-blocks-container">
          <CodeInterface
            label="A"
            codeState={[codeA, setCodeA]}
            consoleOutput={consoleOutputA}
            isFaster={winner === 1}
          />
          <CodeInterface
            label="B"
            codeState={[codeB, setCodeB]}
            consoleOutput={consoleOutputB}
            isFaster={winner === 2}
          />
        </section>
        <section className="flex-centered">
          <button onClick={handleCompare} className="action-btn">
            Compare
          </button>
        </section>
      </main>
    </>
  );
}
