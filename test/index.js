const assert = require("assert");
const fizzBuzz = require("../index");

describe("fizzbuzz", () => {
  it("15で割り切れるときはFizzBuzz", () => {
    assert(fizzBuzz(30) === "FizzBuzz");
  });
  it("5で割り切れるときはBuzz", () => {
    assert(fizzBuzz(10) === "Buzz");
  });
  it("3で割り切れるときはFizz", () => {
    assert(fizzBuzz(3) === "Fizz");
  });
  it("3でも5でも割り切れないときはその値", () => {
    assert(fizzBuzz(7) === "7");
  });
});
