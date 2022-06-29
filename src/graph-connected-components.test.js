const {
  connectedComponentsCount,
  explore,
} = require('./graph-connected-components');

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

describe('connected components', () => {
  it('should return true or false depending on whether node was visited', () => {
    const visited = new Set();
    const firstVisit = explore(graph, 0, visited);
    const secondVisit = explore(graph, 0, visited);

    expect(firstVisit).toBeTruthy();
    expect(secondVisit).toBeFalsy();
  });

  it('should count number of connect components', () => {
    const result = connectedComponentsCount(graph);

    expect(result).toEqual(2);
  });
});
