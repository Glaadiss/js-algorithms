// input
// arr of vertices [A, B, C,  ...]
// arr of edges [ [A, B, 5],  ... ]
// starting point A
// output
// weights of each path and previous nodes:
// {Weights: [3, 5, 6, 7, ...], PreviousNodes: [B, A, C, D, ...]}

function calculate(V, E, s) {
  let Q = [...V]; // remaining vertices
  let S = []; // checked vertices
  const weights = V.map(el => (el === s ? 0 : Infinity));
  const previousNode = V.map(_ => -1);

  while (S.length < 10) {
    //find shortest el in Q
    const minEl = findShortest(weights, V, Q);
    const minElIndex = V.indexOf(minEl);
    //find connected minEl neighbours and
    const elEdges = findNeighbours(minEl, E);
    elEdges.forEach(([el, weight]) => {
      const index = V.indexOf(el);
      const newWeight = weights[minElIndex] + weight;
      if (newWeight < weights[index]) {
        weights[index] = newWeight;
        previousNode[index] = minEl;
      }
    });
    //move el from Q to S
    moveFromTo(Q, S, minEl);
  }

  return { weights, previousNode };
}

function moveFromTo(Q, S, el) {
  Q.forEach((e, i) => {
    if (e === el) {
      Q.splice(i, 1);
    }
  });
  S.push(el);
}

function findShortest(weights, vertices, Q) {
  let min = Infinity;
  let index = null;
  weights.forEach((el, i) => {
    if (Q.includes(vertices[i]) && el < min) {
      min = el;
      index = i;
    }
  });
  return vertices[index];
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
  ["F", "E", 1]
];

const result = calculate(Vertices, Edges, "A");
console.log(result);
