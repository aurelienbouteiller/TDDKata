const isLeapYear = require("../main/leapYears");

test("should return true if year is divisible by 400", () => {
  expect(isLeapYear(2000)).toBe(true);
});
