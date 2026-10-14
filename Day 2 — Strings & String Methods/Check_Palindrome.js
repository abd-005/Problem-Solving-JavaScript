// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

const CheckPalindrome = (str) => {
    const reverseStr = str.split("").reverse().join("")
    return str === reverseStr
}

console.log(CheckPalindrome("eye"))