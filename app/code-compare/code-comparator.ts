type ComparisonResult = {
  time1: number;
  time2: number;
  winner: number;
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

  let winner = 0; // Default to draw (0)
  if (time1 < time2) {
    winner = 1; // Block 1 is faster
  } else if (time2 < time1) {
    winner = 2; // Block 2 is faster
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
const captureConsoleOutput = (code: string) => {
  const originalConsoleLog = console.log;
  const output: string[] = [];

  // Override console.log to capture the output
  console.log = (message: any) => {
    output.push(String(message));
  };

  // Execute the code within a sandboxed environment
  try {
    validateCode(code);
    const start = performance.now();
    new Function(`(function() {
        // Block access to global objects
        const window = undefined, document = undefined, fetch = undefined, XMLHttpRequest = undefined, eval = undefined;
        ${code}
        })();`)();
    const time = performance.now() - start;
    return { time, output };
  } catch (error: unknown) {
    // Error type is `unknown` in modern TypeScript
    if (error instanceof Error) {
      output.push(`Error: ${error.message}`);
      return { time: Infinity, output }; // Return the output with the error message
    } else {
      output.push(`Unknown error`);
      return { time: Infinity, output };
    }
  } finally {
    console.log = originalConsoleLog; // Restore original console.log
  }
};

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
const validateCode = (code: string) => {
  for (const pattern of disallowedPatterns) {
    if (pattern.test(code)) {
      throw new Error(`Disallowed pattern found : "${pattern.source}"`);
    }
  }
  return true;
};
