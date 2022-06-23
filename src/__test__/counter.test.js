import showCount from '../modules/counter.js';

describe('Counter of shows', () => {
  test('Add on new item to the API', () => {
    expect(showCount().length).toBe(1);
  });
});
