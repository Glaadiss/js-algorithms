// input
// arr of vertices [A, B, C,  ...]
// arr of edges [ [A, B, 5],  ... ]
// starting point A
// output
// weights of each path and previous nodes:
// {Weights: [3, 5, 6, 7, ...], PreviousNodes: [B, A, C, D, ...]}

function calculate(V, E, s) {
  const weights = V.map(el => (el === s ? 0 : Infinity));
  const previousNode = V.map(_ => -1);
  // let changeAppeared = false;

  // loop  V.length - 1 times
  for (let i = 0; i < V.length - 1; i++) {
    // loop over each Vertix
    V.forEach((el, elIndex) => {
      if (previousNode[elIndex] !== -1 || el === s) {
        const edges = findNeighbours(el, E);
        // loop over each edge related vertix
        edges.forEach(([neigbhour, weight]) => {
          const newWeight = weight + weights[elIndex];
          const neigbhourIndex = V.indexOf(neigbhour);
          if (newWeight < weights[neigbhourIndex]) {
            weights[neigbhourIndex] = newWeight;
            previousNode[neigbhourIndex] = V[elIndex];
          }
        });
      }
    });
  }

  return { weights, previousNode };
}

function findNeighbours(el, edges) {
  return edges.filter(([A]) => A === el).map(([_, B, W]) => [B, W]);
}

const Vertices = ["A", "B", "C", "D", "E", "F"];
const Edges = [
  ["A", "B", 4],
  ["A", "C", 3],
  ["C", "D", 1],
  ["B", "E", 5],
  ["B", "D", 5],
  ["D", "F", 2],
  ["E", "F", 1],
  ["F", "E", -1]
];

const result = calculate(Vertices, Edges, "A");
console.log(result);
