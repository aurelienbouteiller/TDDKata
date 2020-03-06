function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
}

module.exports = isLeapYear;
