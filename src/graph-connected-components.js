const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false;

  visited.add(String(node));

  for (let neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }

  return count;
};

module.exports = { connectedComponentsCount, explore };
