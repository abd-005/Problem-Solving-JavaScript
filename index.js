const prompt = require("prompt-sync")();

// Problem 1: Reverse a String

function reverseString() {
  const str = prompt("Enter string for reverse: ");
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// console.log(reverseString());

// Problem 2: Count Vowels in a String

function countVowel() {
  const str = prompt("Enter string for Count Vowel: ");
  const vowel = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowel())

// Problem 3: Check for Palindrome

function isPalindrome() {
  const input = prompt("Enter string check Palindrome: ");
  const lowerStr = input.toLowerCase();
  return lowerStr === reverseString(lowerStr);
}

// console.log(isPalindrome())

// Problem 4: Find the Maximum Number

function findMaxNum() {
  const input = prompt("Enter numbers separated by commas: ");
  const arr = input.split(",").map(Number);

  if (arr.length === 0) return undefined;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(findMaxNum());

// Problem 5: Remove Duplicates from an Array

function removeDuplicate() {
  const input = prompt("Enter numbers separated by commas: ");
  const arr = input.split(",").map(Number);
  let newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

// console.log(removeDuplicate());

// Problem 6: Sum of All Numbers in an Array

function sum() {
  const input = prompt("Enter numbers separated by commas: ");
  const arr = input.split(",").map(Number);
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// console.log(sum());

// Problem 7: Find Even Numbers in an Array

function evenNumber() {
  const input = prompt("Enter numbers separated by commas: ");
  const arr = input.split(",").map(Number);

  let evenNumber = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumber.push(num);
    }
  }
  return evenNumber;
}

// console.log(evenNumber());

// Problem 8: Capitalize First Letter of Each Word

function capitalizeFirst() {
  const str = prompt("Enter string to Capitalize First Letter: ");
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirst());
