import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize", () => {
  expect(capitalize("cool")).toBe("Cool");
  expect(capitalize("Bol")).toBe("Bol");
});

test("reverseString", () => {
  expect(reverseString("cool")).toBe("looc");
  expect(reverseString("Lol you")).toBe("uoy loL");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("")).toBe("");
});

test("calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, 0)).toThrow();
});

test("caesarCipher", () => {
  expect(caesarCipher("attack at ! dawn")).toBe("fyyfhp fy ! ifbs");
  expect(caesarCipher("attack")).toBe("fyyfhp");
});

test("anaylze", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
