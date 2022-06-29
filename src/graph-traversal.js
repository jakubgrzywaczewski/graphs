// Iterative depth first n^2

const depthFirstPrint = (graph, startNode) => {
  const stack = [startNode];
  let result = '';

  while (stack.length > 0) {
    const current = stack.pop();
    result += current;

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return result;
};

//Recursive depth first

const depthFirstPrintRecursive = (graph, startNode) => {
  let result = startNode;

  for (let neighbor of graph[startNode]) {
    result += depthFirstPrintRecursive(graph, neighbor);
  }

  return result;
};

// Breadth first

const breadthFirstPrint = (graph, startNode) => {
  const queue = [startNode];
  let result = '';

  while (queue.length > 0) {
    const current = queue.shift();
    result += current;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return result;
};

module.exports = {
  breadthFirstPrint,
  depthFirstPrint,
  depthFirstPrintRecursive,
};
