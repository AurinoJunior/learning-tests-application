const { sum } = require('./calculator')

it('should sum 2 and 2 and the result is 4', () => {
  expect(sum(2, 2)).toBe(4)
});

it('should sum "2" and 2 the result is 4', () => {
  expect(sum('2', 2)).toBe(4)
});

it('should error sum "a" and 2', () => {
  expect(() => sum('a', 2)).toThrowError()
  expect(() => sum('', 2)).toThrowError()
});

it('should error when sum invalid parameters', () => {
  expect(() => sum({})).toThrowError()
  expect(() => sum([])).toThrowError()
  expect(() => sum([2,2])).toThrowError()
});