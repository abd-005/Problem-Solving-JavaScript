// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

const arr = [1, 2, 3, 4, 5]

const sumArray = (arr) => {
    return arr.reduce((acc,n) => acc + n, 0)
}

console.log(sumArray(arr))