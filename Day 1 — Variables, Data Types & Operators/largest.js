// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.


const largest = (a, b, c) => {
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }
}

console.log(largest(3, 7, 5))