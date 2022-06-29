const { buildGraph, undirectedPath } = require('./graph-undirected-path');

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

describe('undirected path', () => {
  it('should build correct graph based on provided edges', () => {
    const expectedResult = {
      i: ['j', 'k'],
      j: ['i'],
      k: ['i', 'm', 'l'],
      m: ['k'],
      l: ['k'],
      o: ['n'],
      n: ['o'],
    };
    const result = buildGraph(edges);

    expect(result).toStrictEqual(expectedResult);
  });
  it('should return true or false depnding on whether path between edges exists', () => {
    const existingPath = undirectedPath(edges, 'j', 'm');
    const notExistingPath = undirectedPath(edges, 'k', 'o');

    expect(existingPath).toBeTruthy();
    expect(notExistingPath).toBeFalsy();
  });
});
