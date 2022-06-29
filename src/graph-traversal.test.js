const {
  breadthFirstPrint,
  depthFirstPrint,
  depthFirstPrintRecursive,
} = require('./graph-traversal');

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};
describe('traversal', () => {
  describe('breadth first', () => {
    it('should return correct path', () => {
      const expectedResult = 'abcdef';
      const result = breadthFirstPrint(graph, 'a');

      expect(result).toBe(expectedResult);
    });
  });

  describe('depth first', () => {
    it('should return correct path', () => {
      const expectedResult = 'acebdf';
      const result = depthFirstPrint(graph, 'a');

      expect(result).toBe(expectedResult);
    });
  });

  describe('depth first', () => {
    it('should return correct path', () => {
      const expectedResult = 'abdfce';
      const result = depthFirstPrintRecursive(graph, 'a');

      expect(result).toBe(expectedResult);
    });
  });
});
