import { getRandomInt, arrayRandomOrder } from './lib';

describe('getRandomInt test', () => {
  it('getRandomInt', () => {
    expect(getRandomInt(5, 10)).toBeGreaterThanOrEqual(5);
  });

  it('getRandomInt', () => {
    expect(getRandomInt(6, 10)).toBeGreaterThanOrEqual(6);
  });

  it('getRandomInt', () => {
    expect(getRandomInt(0, 10)).toBeGreaterThanOrEqual(0);
  });

  it('getRandomInt', () => {
    expect(getRandomInt(0, 1)).toBe(0);
  });

  it('getRandomInt', () => {
    expect(getRandomInt(5, 10)).toBeLessThan(10);
  });

  it('getRandomInt', () => {
    expect(getRandomInt(0, 5)).toBeLessThan(5);
  });
});

describe('arrayRandomOrder test', () => {
  it('arrayRandomOrder', () => {
    expect(arrayRandomOrder([ 5, 10 ]).length).toBe(2);
  });
  it('arrayRandomOrder', () => {
    expect(arrayRandomOrder([])).toEqual([]);
  });
  it('arrayRandomOrder', () => {
    expect(arrayRandomOrder([1])).toEqual([1]);
  });
});
