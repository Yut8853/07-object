const countMap = require('./app');

test('課題１５', () => {
  const mapObj = countMap('hhhellooo');
  expect(mapObj.get('h')).toBe(3);
  expect(mapObj.get('e')).toBe(1);
  expect(mapObj.get('l')).toBe(2);
  expect(mapObj.get('o')).toBe(3);
});
