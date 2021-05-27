import {calcTileType} from "../utils";

test('return top', () => {
  let stringBorder = calcTileType(1, 8);
  expect(stringBorder).toBe('top');
});

test('return top-left', () => {
  let stringBorder = calcTileType(0, 8);
  expect(stringBorder).toBe('top-left')
});

test('return top-right', () => {
  let stringBorder = calcTileType(7, 8);
  expect(stringBorder).toBe('top-right')
});

test('return right', () => {
  let stringBorder = calcTileType(15, 8);
  expect(stringBorder).toBe('right')
});

test('return left', () => {
  let stringBorder = calcTileType(16, 8);
  expect(stringBorder).toBe('left')
});

test('return bottom', () => {
  let stringBorder = calcTileType(60, 8);
  expect(stringBorder).toBe('bottom')
});

test('return bottom-right', () => {
  let stringBorder = calcTileType(63, 8);
  expect(stringBorder).toBe('bottom-right')
});

test('return bottom-left', () => {
  let stringBorder = calcTileType(56, 8);
  expect(stringBorder).toBe('bottom-left')
});

test('return center', () => {
  let stringBorder = calcTileType(44, 8);
  expect(stringBorder).toBe('center')
});