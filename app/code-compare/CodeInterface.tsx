"use client";
import { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

interface CodeInterfaceProps {
  codeState: [string, React.Dispatch<React.SetStateAction<string>>];
  consoleOutput: string[];
  isFaster: boolean;
  label: string;
}

export default function CodeInterface({
  codeState,
  consoleOutput,
  isFaster,
  label,
}: CodeInterfaceProps) {
  const [code, setCode] = codeState;
  const consoleRef = useRef<HTMLUListElement>(null);

  // Function to scroll to the bottom of the console output container
  const scrollToBottom = () => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  };

  // useEffect to scroll to the bottom when consoleOutput changes
  useEffect(() => {
    scrollToBottom();
  }, [consoleOutput]);


  return (
    <div style={{ width: "48%" }}>
      <h3>Code Block {label}</h3>
      <div className={`${isFaster ? "faster" : ""} code-block`}>
        <Editor
          language="javascript"
          value={code}
          options={{
            selectOnLineNumbers: false,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: "line",
            automaticLayout: true,
            lineNumbers: "off",
            renderLineHighlight: "none",
            minimap: {
              enabled: false,
            },
          }}
          onChange={(event) => setCode(event as string)}
          theme={"hc-black"}
        />
      </div>
      <h3>Console {label}</h3>
      <ul className="code-console" ref={consoleRef}>
        {consoleOutput.map((line: string, index: number) => (
          <li key={`${label}-${index}`} className="console-line">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
