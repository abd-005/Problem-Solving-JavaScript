// Problem 50: Check If Two Strings Are Anagrams  [Easy]
// Description: Write a function isAnagram(s1, s2) that returns true if the two strings use the same characters in the same amount.
// Example:
// Input: 'listen', 'silent'Output: true
// Hint: Compare length first, then normalize and sort both strings.


//////////////////////////////


// const isAnagram = (s1, s2) => {
//   if (s1.length !== s2.length) return false;
//   const charCount = {};

//   for (const char of s1) charCount[char] = (charCount[char] || 0) + 1;
//   for (const char of s2) {
//     if (!charCount[char]) return false;
//     charCount[char]--;
//   }

//   return true;
// };


//////////////////////////////


const isAnagram = (s1, s2) => {
  s1 = s1.toLowerCase().replace(/\s+/g, "");
  s2 = s2.toLowerCase().replace(/\s+/g, "");

  if (s1.length !== s2.length) return false;

  const charCount = {};

  for (const char of s1) charCount[char] = (charCount[char] || 0) + 1;

  for (const char of s2) {
    if (!charCount[char]) return false; // Missing or already used up
    charCount[char]--;
  }

  return true;
};


console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("astronomer", "moon starer"));