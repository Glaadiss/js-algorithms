function initGraph(G) {
  const graph = G || {
    vertices: [],
    edges: []
  };

  Object.defineProperties(graph, {
    addVertix: { value: addVertix.bind(null, graph) },
    removeVertix: { value: removeVertix.bind(null, graph) },
    addEdge: { value: addEdge.bind(null, graph) },
    removeEdge: { value: removeEdge.bind(null, graph) }
  });

  return graph;
}

function addVertix(graph, vertix) {
  return initGraph({
    ...graph,
    vertices: [...new Set([...graph.vertices, vertix])]
  });
}

// When edge already exist, it will be replaced with new value
function addEdge(graph, { from, to, value }) {
  const doesExist = edge => edge.from === from && edge.to === to;
  return {
    ...graph,
    edges: graph.edges.map(
      edge => (doesExist(edge) ? { ...edge, value } : edge)
    )
  };
}

function removeVertix(graph, vertix) {
  return {
    vertices: graph.vertices.filter(el => el !== vertix),
    edges: graph.edges.filter(
      edge => edge.from !== vertix && edge.to !== vertix
    )
  };
}

function removeEdge(graph, { from, to }) {
  return {
    ...graph,
    edges: grap.edges.filter(edge => !(edge.from === from && edge.to === to))
  };
}

module.exports = {
  Graph: initGraph(),
  initGraph,
  addEdge,
  removeEdge,
  addVertix,
  removeVertix
};
