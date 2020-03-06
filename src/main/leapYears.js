function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else return year % 400 === 0;
}

module.exports = isLeapYear;
