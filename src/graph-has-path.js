const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

// Depth first

const hasPathDF = (graph, src, dest) => {
  if (src === dest) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDF(graph, neighbor, dest) === true) {
      return true;
    }
  }

  return false;
};

// Breath first

const hasPathBF = (graph, src, dest) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) {
      return true;
    }

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// DFS avoid cycles

const hasPathWithoutCycles = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathWithoutCycles(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
};

module.exports = { hasPathBF, hasPathDF, hasPathWithoutCycles };
