"use client";
import { useState, useRef } from "react";
import { comparePerformance } from "./code-comparator";
import NavBar from "../components/NavBar";
import "../styles/codeCompare.css";

export default function CodeComparator() {
  const [result, setResult] = useState<string>("");
  const [winner, setWinner] = useState<number>(null);
  const consoleOutput1 = useRef<string[]>([]); // Store console output for block 1
  const consoleOutput2 = useRef<string[]>([]); // Store console output for block 2

  const disallowedPatterns = [
    /while\s*\(true\)/i, // Infinite while loop
    /for\s*\(;;\)/i, // Infinite for loop
    /window/i, // Access to window
    /document/i, // Access to document
    /eval/i, // Use of eval
    /fetch/i, // Network requests
    /XMLHttpRequest/i, // AJAX requests
  ];

  // Helper function to validate code
  const validateCode = (code: string, blockName: string) => {
    for (const pattern of disallowedPatterns) {
      if (pattern.test(code)) {
        throw new Error(
          `Disallowed pattern found in ${blockName}: "${pattern.source}"`
        );
      }
    }
    return true;
  };

  const handleCompare = () => {
    const codeBlock1 = (
      document.getElementById("codeBlock1") as HTMLTextAreaElement
    ).value;
    const codeBlock2 = (
      document.getElementById("codeBlock2") as HTMLTextAreaElement
    ).value;

    try {
      const { time1, time2, winner:faster, output1, output2 } = comparePerformance(
        codeBlock1,
        codeBlock2
      );

      output1.push(`\nExecution Time: ${time1.toFixed(2)} ms`);
      output2.push(`\nExecution Time: ${time2.toFixed(2)} ms`);

      document.getElementById("console1")!.innerHTML = output1.join("<br>");
      document.getElementById("console2")!.innerHTML = output2.join("<br>");

      setWinner(faster);
    } catch (error) {
      setResult(`<p style="color: red;">Error: ${error.message}</p>`);
    }
  };

  return (
    <>
      <NavBar />
      <main style={{ padding: "20px", paddingTop: "10vh" }}>
        <h1 className="flex-centered">JavaScript Efficiency Comparator</h1>
        <section className="code-blocks-container">
          <div style={{ width: "48%" }}>
            <h3>Code Block A</h3>
            <textarea
              id="codeBlock1"
              className={`${winner===1?"faster":""} code-block`}
              placeholder="Paste JavaScript code here..."
            />
            <h3>Console A</h3>
            <div id="console1" className="code-console"></div>
          </div>
          <div style={{ width: "48%" }}>
            <h3>Code Block B</h3>
            <textarea
              id="codeBlock2"
              className={`${winner===2?"faster":""} code-block`}
              placeholder="Paste JavaScript code here..."
            />
            <h3>Console B</h3>
            <div id="console2" className="code-console"></div>
          </div>
        </section>
        <section className="flex-centered">
          <button
            onClick={handleCompare}
            className="action-btn"
          >
            Compare Performance
          </button>
        </section>
      </main>
    </>
  );
}
