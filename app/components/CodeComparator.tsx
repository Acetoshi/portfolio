"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CodeInterface from "./CodeInterface";
import "../styles/codeCompare.css";

export default function CodeComparator() {
  const codeStringA = `const arr = [5, 2, 8, 1, 3];

  // First, sort the array, then map it to get squared values
  const sortedAndSquared = arr.sort((a, b) => a - b).map(num => num * num);

  console.log(sortedAndSquared);`;

  const codeStringB = `const arr = [5, 2, 8, 1, 3];

  // Using reduce to accumulate the sorted squared values
  const sortedAndSquaredUsingReduce = arr.reduce((acc, num) => {
    acc.push(num * num);  // Push the square of each number to the accumulator
    return acc;
  }, []).sort((a, b) => a - b);  // Sort the result after accumulating

  console.log(sortedAndSquaredUsingReduce);`;

  // use the URL to pass arguments to the page
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const urlIterations = searchParams.get("iterations");
  const urlCodeA = searchParams.get("codeA");
  const urlCodeB = searchParams.get("codeA");

  const [winner, setWinner] = useState<number | null>(null);
  const [timeA, setTimeA] = useState<number | null>(null);
  const [timeB, setTimeB] = useState<number | null>(null);

  const [consoleOutputA, setConsoleOutputA] = useState<string[]>([]);

  const [consoleOutputB, setConsoleOutputB] = useState<string[]>([]);
  const [workingA, setWorkingA] = useState<boolean>(false);
  const [workingB, setWorkingB] = useState<boolean>(false);
  const [cycles, setCycles] = useState<number>(Number(urlIterations) || 1000);

  const encode = (code: string): string => {
    return encodeURIComponent(code);
  };

  const decode = (code: string | null): string | null => {
    return code === null ? null : decodeURIComponent(code);
  };
  const [codeA, setCodeA] = useState<string>(decode(urlCodeA) || codeStringA);
  const [codeB, setCodeB] = useState<string>(codeStringB);

  //This is to store code inside URL parameters, needed to share results
  useEffect(() => {
    if (cycles && codeA && codeB) {
      router.replace(
        `${pathname}?iterations=${cycles}&codeA=${encode(codeA)}&codeB=${encode(
          codeB
        )}`,
        { scroll: false }
      );
    }
  }, [cycles, codeA, codeB]);

  // launches two web workers that will run the code and measure it
  const handleCompare = async () => {
    setWorkingA(true);
    setWorkingB(true);
    setWinner(0);

    runWorker(codeB, cycles, "B");
    runWorker(codeA, cycles, "A");
  };

  // this determins who the winner is, useEffect enables to wait for the workers to have finished
  useEffect(() => {
    if (timeA !== null && timeB !== null) {
      let diff = Math.abs(timeB - timeA);
      let maxTime = Math.max(timeA, timeB);

      // Check that difference is significant enough
      if (diff > 20 && diff > 0.1 * maxTime) {
        if (timeA < timeB) setWinner(1);
        if (timeA > timeB) setWinner(2);
        console.log(
          "La différence est supérieure à 10% de la valeur maximale."
        );
      } else {
        console.log(
          "La différence est inférieure ou égale à 10% de la valeur maximale."
        );
      }
    }
  }, [timeA, timeB]);

  const runWorker = (
    codeBlock: string,
    cycles: number,
    id: string
  ): Promise<{ time: number; output: string[] }> => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(
        new URL("../workers/codeRunner.js", import.meta.url)
      );

      worker.onerror = reject;

      worker.postMessage({ code: codeBlock, id, cycles });

      // Listen for progress updates from worker 1
      worker.onmessage = (e) => {
        const { id, output, time } = e.data;
        if (id === "A") {
          setWorkingA(false);
          setTimeA(time);
          output.push(`\nExecution Time: ${time.toFixed(0)} ms`);
          setConsoleOutputA(output);
        } else if (id === "B") {
          setWorkingB(false);
          setTimeB(time);
          output.push(`\nExecution Time: ${time.toFixed(0)} ms`);
          setConsoleOutputB(output);
        }
      };

      // Clean up worker on promise resolution or rejection
      worker.onmessageerror = () => worker.terminate();
    });
  };

  return (
    <div className="main-container">
      <h1 className="flex-centered">Compare JavaScript Efficiency</h1>
      <section className="code-blocks-container">
        <CodeInterface
          label="A"
          codeState={[codeA, setCodeA]}
          consoleOutput={consoleOutputA}
          isFaster={winner === 1}
          isSlower={winner === 2}
          working={workingA}
        />
        <CodeInterface
          label="B"
          codeState={[codeB, setCodeB]}
          consoleOutput={consoleOutputB}
          isFaster={winner === 2}
          isSlower={winner === 1}
          working={workingB}
        />
      </section>
      <section className="flex-centered action-btn-container">
        <button
          disabled={workingA || workingB}
          onClick={handleCompare}
          className="action-btn"
        >
          {workingA || workingB ? "Working" : "Compare"}
        </button>
        <label htmlFor="iterations">over</label>
        <select
          id="iterations"
          value={cycles}
          onChange={(event) => {
            setCycles(Number(event.target.value));
          }}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="1000">1 000</option>
          <option value="10000">10 000</option>
          <option value="100000">100 000</option>
          <option value="1000000">1 000 000</option>
        </select>
        iterations
      </section>
    </div>
  );
}
