import showsCounter from '../modules/shows-counter.js';

test('Add number of shows', () => {
  const number = showsCounter();
  expect(number).toBe(9);
});