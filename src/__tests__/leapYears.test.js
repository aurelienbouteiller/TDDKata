const isLeapYear = require("../main/leapYears");

test("should return true if year is divisible by 400", () => {
  expect(isLeapYear(2000)).toBe(true);
});

test("should return false if year is divisible by 100 and not by 400", () => {
  expect(isLeapYear(500)).toBe(false);
});

test("should return true if year is divisible by 4 and not by 100", () => {
  expect(isLeapYear(2008)).toBe(true);
});
