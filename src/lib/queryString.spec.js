const { queryString } = require('./queryString');

it('should create valid query string when valid object', () => {
  const obj = {
    name: 'aurino',
    idade: 23,
  };

  expect(queryString(obj)).toBe('name=aurino&idade=23');
});
