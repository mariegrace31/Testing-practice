import { capitalize } from "./task4";
describe('capitalize', () => {
  test('should capitalize the first character of a string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });
});