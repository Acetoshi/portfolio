type ComparisonResult = {
  time1: number;
  time2: number;
  winner: string;
  output1: string[];
  output2: string[];
};

export const comparePerformance = (
  codeBlock1: string,
  codeBlock2: string
): ComparisonResult => {
  // Capture console output and measure performance for both code blocks
  const { time: time1, output: output1 } = captureConsoleOutput(codeBlock1);
  const { time: time2, output: output2 } = captureConsoleOutput(codeBlock2);

  // Compare execution times
  let winner;
  if (time1 < time2) {
    winner = "Code Block 1 is faster!";
  } else if (time2 < time1) {
    winner = "Code Block 2 is faster!";
  } else {
    winner = "Both Code Blocks have the same execution time!";
  }

  return {
    time1,
    time2,
    winner,
    output1,
    output2,
  };
};

// Capture console output
const captureConsoleOutput = ( code: string) => {
  const originalConsoleLog = console.log;
  const output: string[] = [];

  // Override console.log to capture the output
  console.log = (message: any) => {
    output.push(String(message));
  };

  // Execute the code within a sandboxed environment
  try {
    const start = performance.now();
    new Function(
      `
            (function() {
              // Block access to global objects
              const window = undefined, document = undefined, fetch = undefined, XMLHttpRequest = undefined, eval = undefined;
              ${code}
            })();
            `
    )();
    const time = performance.now() - start;
    return { time, output };
  } catch (error) {
    throw error;
  } finally {
    console.log = originalConsoleLog; // Restore original console.log
  }
};
