// This web worker provides a sandboxed environment, no DOM
self.onmessage = (e) => {
  const { code, id, cycles } = e.data;
  const output = [];
  
  // Override console.log to capture the output ONCE
  const originalConsoleLog = console.log;
  console.log = (message) => {
    output.push(String(message));
  };

  const run = (code) => {
    new Function(`${code}`)();
  };

  try {
    const start = performance.now();

    run(code);

    console.log = originalConsoleLog; // Restore original console.log after first loop

    for (let i = 1; i < cycles - 1; i++) {
      run(code);
    }

    time = performance.now() - start;
  } catch (error) {
    output.push(`Error: ${error.message}`);
    time = Infinity;
  } finally {
    // Post the result back to the main thread
    postMessage({ id, time, output });
  }
};
