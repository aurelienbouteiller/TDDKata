function resolve(number) {
  if (number % 3 !== 0 && number % 5 !== 0) {
    return "";
  }
}

module.exports = resolve;
