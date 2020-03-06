function resolve(number) {
  if (number % 3 !== 0 && number % 5 !== 0) {
    return "";
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }

  if (number % 3 === 0) {
    return "Fizz";
  }

  if (number % 5 === 0) {
    return "Buzz";
  }
}

module.exports = resolve;
