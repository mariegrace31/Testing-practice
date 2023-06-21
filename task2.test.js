import { reverseString } from "./task2";
test('reverseString should reverse the given string', () => {
  const inputStr = 'Hello, World!';
  const expectedOutput = '!dlroW ,olleH';
  const result = reverseString(inputStr);
  expect(result).toBe(expectedOutput);
});