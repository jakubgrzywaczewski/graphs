const {
  getSizeOfComponent,
  getSizeOfLargestComponent,
} = require('./largest-component');

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

describe('largest connected component', () => {
  it('should return size of given component', () => {
    const visited = new Set();
    const firstComponent = getSizeOfComponent(graph, 0, visited);
    const secondComponent = getSizeOfComponent(graph, 2, visited);

    expect(firstComponent).toEqual(4);
    expect(secondComponent).toEqual(3);
  });

  it('should return size of the biggest component', () => {
    const result = getSizeOfLargestComponent(graph);

    expect(result).toEqual(4);
  });
});
