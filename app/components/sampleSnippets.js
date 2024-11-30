export const sampleCodeA = `// Function to count all possible paths in a n,m Matrix
const gridTraveler = (m, n) => {
  if (n === 0 || m === 0) return 0
  if (n === 1 || m === 1) return 1
  if (n === m) return gridTraveler(n, n - 1) * 2

  return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
};

console.log(gridTraveler(11,11));`;

export const sampleCodeB = `// Better approach using memoization with a array
const gridTraveler = (m, n) => {
  if (n === 0 || m === 0) return 0
  if (n === 1 || m === 1) return 1
  
  const map= Array.from({ length: n }, () => Array(m)); // start with an empty matrix to store intermediate results

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) { // only explore top part of the matrix
        if (i === 0 || j === 0) {
          map[i][j] = 1
        } else if (i === j) {
          map[i][j] = map[i][i-1] * 2
        } else {
          map[i][j] = map[i - 1][j] + map[i][j - 1];
        }
    }
  }
  return map[n-1][m-1];
};

console.log(gridTraveler(11,11));`;
