const { sum } = require('./calculator')

it('should sum 2 and 2 and the result is 4', () => {
  expect(sum(2, 2)).toBe(4)
});