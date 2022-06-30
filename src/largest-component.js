const getSizeOfComponent = (graph, node, visited) => {
  if (visited.has(String(node))) {
    return 0;
  }

  visited.add(String(node));
  let size = 1;

  for (let neighbor of graph[node]) {
    size += getSizeOfComponent(graph, neighbor, visited);
  }

  return size;
};

const getSizeOfLargestComponent = (graph) => {
  const visited = new Set();
  let max = 0;

  for (let node in graph) {
    const size = getSizeOfComponent(graph, node, visited);

    if (size > max) {
      max = size;
    }
  }

  return max;
};

module.exports = { getSizeOfComponent, getSizeOfLargestComponent };
