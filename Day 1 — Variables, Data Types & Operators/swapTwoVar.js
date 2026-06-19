// Day 1 — Variables, Data Types & Operators
 
// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

const SwapVar = (a, b) => {
    // a += b;
    // b = a - b
    // a = a -b

    // other way
    
    [a, b] = [b, a]
     return [a, b]
}


console.log(SwapVar(7, 3))