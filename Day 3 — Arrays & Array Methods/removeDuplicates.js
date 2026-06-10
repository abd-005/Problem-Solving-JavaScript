// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().



// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]) );



const removeDuplicates = (arr) => {
  let newArray = [];

  newArray = arr.filter((num, i) => arr.indexOf(num) === i);
  return newArray;
};

arr = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
