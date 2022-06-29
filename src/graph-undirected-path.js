const { hasPathWithoutCycles } = require('./graph-has-path');

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPathWithoutCycles(graph, nodeA, nodeB, new Set());
};

module.exports = { buildGraph, undirectedPath };
