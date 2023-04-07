const { count, countMap } = require('./app');

test('課題１５オブジェクト', () => {
  expect(count('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
});

test('課題１５マップ', () => {
  const mapObj = countMap('hhhellooo');
  expect(mapObj.get('h')).toBe(3);
  expect(mapObj.get('e')).toBe(1);
  expect(mapObj.get('l')).toBe(2);
  expect(mapObj.get('o')).toBe(3);
});
