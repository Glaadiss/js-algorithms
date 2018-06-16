const Graph = require("./graph");

describe("Graph tests", () => {
  describe("initGraph function", () => {
    test("return graph object", () => {
      expect(Graph.initGraph()).toMatchObject({ vertices: [], edges: [] });
    });
  });

  describe("Graph functions", () => {
    let graph;
    beforeAll(() => {
      graph = Graph.initGraph();
    });

    test("addVertix function increment length of vertices array ", () => {
      const newGraph = Graph.addVertix(graph, 2);
      expect(newGraph.vertices.length).toBe(1);
    });

    test("removeVertix function decrement length of vertices array ", () => {
      const newGraph = Graph.addVertix(graph, 2);

      expect(newGraph.vertices.length).toBe(1);
    });
  });
});
