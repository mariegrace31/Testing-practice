import { calculator } from "./task3";

describe('calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new calculator();
  });

  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('should add a positive and a negative number correctly', () => {
      expect(calc.add(5, -3)).toBe(2);
    });

    test('should add two negative numbers correctly', () => {
      expect(calc.add(-7, -2)).toBe(-9);
    });
  });
  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });

    test('should subtract a positive and a negative number correctly', () => {
      expect(calc.subtract(5, -3)).toBe(8);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(calc.subtract(-7, -2)).toBe(-5);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calc.divide(8, 0)).toThrow('Cannot divide a number by 0');
    });
     test('should divide a positive number by a negative number correctly', () => {
      expect(calc.divide(10, -2)).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calc.multiply(2, 3)).toBe(6);
    });

    test('should multiply a positive and a negative number correctly', () => {
      expect(calc.multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calc.multiply(-7, -2)).toBe(14);
    });
  });
});
