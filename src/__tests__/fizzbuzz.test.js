const resolve = require("../main/fizzbuzz");

test("should return empty string if number not divisible by 3 and not divisible by 5", () => {
  expect(resolve(4)).toBe("");
});

test("should return Fizz if number divisible by 3", () => {
  expect(resolve(3)).toBe("Fizz");
});

test("should return Buzz if number divisible by 5", () => {
  expect(resolve(5)).toBe("Buzz");
});
