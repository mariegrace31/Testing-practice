import { stringLength } from './task1';
test('length',() => {
  const str2 = 'welcome';
  const len = 7;
  expect(stringLength(str2)).toBe(len);
});