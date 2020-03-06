const resolve = require("../main/fizzbuzz");

test("should return empty string if number not divisible by 3 and not divisible by 5", () => {
  expect(resolve(4)).toBe("");
});
