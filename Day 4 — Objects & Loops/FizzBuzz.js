// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.

const FizzBuzz = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz"
      result += i === num ? "" : ", ";
    } else if (i % 5 === 0) {
      result += "Buzz";
      result += i === num ? "" : ", ";
    } else if (i % 3 === 0) {
      result += "Fizz";
      result += i === num ? "" : ", ";
    } else {
      result += i;
      result += i === num ? "" : ", ";
    }
  }
  return result;
};

console.log(FizzBuzz(15));
