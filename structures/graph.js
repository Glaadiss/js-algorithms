function initGraph(G) {
  const graphProperties = {
    vertices: [],
    edges: []
  };

  const graph = Object.create(G || graphProperties, {
    addVertix: { value: addVertix.bind(null, graphProperties) },
    removeVertix: { value: removeVertix.bind(null, graphProperties) },
    addEdge: { value: addEdge.bind(null, graphProperties) },
    removeEdge: { value: removeEdge.bind(null, graphProperties) }
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
  return initGraph({
    ...graph,
    edges: graph.edges.map(
      edge => (doesExist(edge) ? { ...edge, value } : edge)
    )
  });
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

module.exports = { initGraph, addEdge, removeEdge, addVertix, removeVertix };
