// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.


//////////////////////////////


// const fibonacci = (n) => {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };


//////////////////////////////


const fibonacci = (n) => {
    if (n < 0) return undefined;

    let prev = 0;
    let curr = 1;

    // Advance the pair n times; f(0) = 0, f(1) = 1
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return prev;
};


console.log(fibonacci(6));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));