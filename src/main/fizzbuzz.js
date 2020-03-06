function resolve(number) {
  let answer = "";

  if (number % 3 === 0 && number % 5 === 0) {
    answer = "FizzBuzz";
  } else if (number % 3 === 0) {
    answer = "Fizz";
  } else if (number % 5 === 0) {
    answer = "Buzz";
  }

  return answer;
}

module.exports = resolve;
