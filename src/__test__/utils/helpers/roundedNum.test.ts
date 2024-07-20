import { expect, test } from 'vitest';
import { roundedNum } from '../../../utils/helpers/roundedNum.helper';

test('round 1.33333 to 1.33', () => {
  expect(roundedNum(1.33333, 2)).toBe(1.33)
})
test('round 1.338 to 1.34', () => {
  expect(roundedNum(1.338, 2)).toBe(1.34)
})
test('round 1.335 to 1.34', () => {
  expect(roundedNum(1.335, 2)).toBe(1.34)
})
test('round 10 / 5 to 2', () => {
  expect(roundedNum((10 / 5), 2)).toBe(2)
})