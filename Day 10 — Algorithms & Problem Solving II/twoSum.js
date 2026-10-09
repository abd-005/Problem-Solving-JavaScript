// Problem 49: Two Sum  [Easy]
// Description: Write a function twoSum(nums, target) that returns the indices of the two numbers that add up to target.
// Example:
// Input: nums=[2,7,11,15], target=9Output: [0,1]
// Hint: Use a hash map to store each number's complement while iterating.


//////////////////////////////


// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return [];
// };


//////////////////////////////


const twoSum = (nums, target) => {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Return as soon as the matching number has been seen
    if (seen.has(complement)) return [seen.get(complement), i];

    seen.set(nums[i], i);
  }

  return [];
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
