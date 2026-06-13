// Day 5 — Functions & Scope
 
// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).


const factorial = (num) => {
    let res = 1
    for (let i = num; i >= 1; i--){
         res = res * i;
    }
    return res
}

console.log(factorial(5))