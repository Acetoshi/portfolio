"use client";
import { useState, useRef } from "react";
import { comparePerformance } from "./code-comparator";

export default function CodeComparator() {
  const [result, setResult] = useState<string>("");
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
    const codeBlock1 = (document.getElementById('codeBlock1') as HTMLTextAreaElement).value;
    const codeBlock2 = (document.getElementById('codeBlock2') as HTMLTextAreaElement).value;

    try {
      const comparisonResult = comparePerformance(codeBlock1, codeBlock2);

      // Update result based on the comparison
      setResult(`
        <h3>Results:</h3>
        <p>Code Block 1 Execution Time: ${comparisonResult.time1.toFixed(2)} ms</p>
        <p>Code Block 2 Execution Time: ${comparisonResult.time2.toFixed(2)} ms</p>
        <h4>${comparisonResult.winner}</h4>
      `);

      // Display console outputs
      document.getElementById('console1')!.innerHTML = comparisonResult.output1.join('<br>');
      document.getElementById('console2')!.innerHTML = comparisonResult.output2.join('<br>');
    } catch (error) {
      setResult(`<p style="color: red;">Error: ${error.message}</p>`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>JavaScript Efficiency Comparator</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div style={{ width: "48%" }}>
          <h3>Code Block 1</h3>
          <textarea
            id="codeBlock1"
            placeholder="Paste JavaScript code here..."
            style={{
              width: "100%",
              height: "150px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}
          />
          <div
            id="console1"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#f1f1f1",
              border: "1px solid #ccc",
              minHeight: "100px",
              fontFamily: "monospace",
              fontSize: "14px",
              whiteSpace: "pre-wrap",
            }}
          ></div>
        </div>
        <div style={{ width: "48%" }}>
          <h3>Code Block 2</h3>
          <textarea
            id="codeBlock2"
            placeholder="Paste JavaScript code here..."
            style={{
              width: "100%",
              height: "150px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}
          />
          <div
            id="console2"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#f1f1f1",
              border: "1px solid #ccc",
              minHeight: "100px",
              fontFamily: "monospace",
              fontSize: "14px",
              whiteSpace: "pre-wrap",
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={handleCompare}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Compare Performance
      </button>
      <div
        id="result"
        dangerouslySetInnerHTML={{ __html: result }}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#e9e9ff",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}
