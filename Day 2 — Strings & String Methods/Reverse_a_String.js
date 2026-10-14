// Problem 7: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the string with its characters in reverse order.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'javascript' → Output: 'tpircsavaj'
// Hint: Use split('').reverse().join('').

const reversedString = (string) => {
    return string.split('').reverse().join('')
}
console.log(reversedString("Hello World"))