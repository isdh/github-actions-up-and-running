module.exports = function fizzBuzz(values) {
  if (values % 15 === 0) {
    return "FizzBuzz";
  }
  if (values % 5 === 0) {
    return "Buzz";
  }
  if (values % 3 === 0) {
    return "Fizz";
  }
  return String(values);
};
