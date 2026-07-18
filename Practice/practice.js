// ==========================================
// DAY 1 - PURE FUNCTION UTILITIES
// ==========================================

// Problem 1: Reverse a String
const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

// Problem 2: Count Vowels in a String
const countVowel = (str) => {
  const vowel = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
};

// Problem 3: Check for Palindrome
const isPalindrome = (str) => {
  const lowerStr = str.toLowerCase();
  return lowerStr === reverseString(lowerStr);
};

// Problem 4: Find the Maximum Number
const findMaxNum = (arr) => {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// Problem 5: Remove Duplicates from an Array
const removeDuplicate = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
};

// Problem 6: Sum of All Numbers in an Array
const sum = (arr) => {
  let sumValue = 0;
  for (let num of arr) {
    sumValue += num;
  }
  return sumValue;
};

// Problem 7: Find Even Numbers in an Array
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Problem 8: Capitalize First Letter of Each Word
const capitalizeFirst = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Problem 9: Find the Factorial of a Number
const factorial = (n) => {
  if (n < 0) return undefined;
  let result = 1; 
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  return result;
};

// Problem 10: PingPong Challenge
const pingPong = () => {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("PingPong");
    } else if (i % 3 === 0) {
      arr.push("Ping");
    } else if (i % 5 === 0) {
      arr.push("Pong");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

// ==========================================
// TEST LOGS (EXECUTION ZONE)
// ==========================================

console.log("P1 (Reverse String):", reverseString("hello")); 
// Output: "olleh"

console.log("P2 (Count Vowels):", countVowel("the cat sat on the mat")); 
// Output: 6

console.log("P3 (Is Palindrome?):", isPalindrome("Racecar")); 
// Output: true

console.log("P4 (Find Max):", findMaxNum([3, 7, 2, 9, 5])); 
// Output: 9

console.log("P5 (Remove Duplicates):", removeDuplicate([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

console.log("P6 (Sum Array):", sum([10, 20, 30])); 
// Output: 60

console.log("P7 (Get Even Numbers):", getEvenNumbers([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]

console.log("P8 (Capitalize First):", capitalizeFirst("the book heaven portfolio")); 
// Output: "The Book Heaven Portfolio"

console.log("P9 (Factorial):", factorial(5)); 
// Output: 120

console.log("P10 (PingPong Suite):\n", pingPong());
// Output: [1, 2, "Ping", 4, "Pong", "Ping", 7, 8, "Ping", "Pong", 11, "Ping", 13, 14, "PingPong", 16, 17, "Ping", 19, "Pong"]