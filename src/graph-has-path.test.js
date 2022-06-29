const {
  hasPathBF,
  hasPathDF,
  hasPathWithoutCycles,
} = require('./graph-has-path');

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const graphWithCycles = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
};

describe('has path', () => {
  describe('breadth first search', () => {
    it('should return true or false depnding on whether path between edges exists', () => {
      const existingPath = hasPathBF(graph, 'f', 'k');
      const notExistingPath = hasPathBF(graph, 'h', 'k');

      expect(existingPath).toBeTruthy();
      expect(notExistingPath).toBeFalsy();
    });
  });

  describe('depth first search', () => {
    it('should return true or false depnding on whether path between edges exists', () => {
      const existingPath = hasPathDF(graph, 'f', 'k');
      const notExistingPath = hasPathDF(graph, 'h', 'k');

      expect(existingPath).toBeTruthy();
      expect(notExistingPath).toBeFalsy();
    });
  });

  describe('depth first with handling cycles', () => {
    it('should return true or false depnding on whether path between edges exists', () => {
      const existingPath = hasPathWithoutCycles(
        graphWithCycles,
        'j',
        'm',
        new Set()
      );
      const notExistingPath = hasPathWithoutCycles(
        graphWithCycles,
        'k',
        'o',
        new Set()
      );

      expect(existingPath).toBeTruthy();
      expect(notExistingPath).toBeFalsy();
    });
  });
});
