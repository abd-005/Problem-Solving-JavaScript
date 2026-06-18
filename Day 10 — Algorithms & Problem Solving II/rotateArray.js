// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.


const rotateArray = (arr, k) => {
    const arr1 = arr.slice(-k)
    const arr2 = arr.slice(0, -k) 
    const arr3 = arr1.concat(arr2)

    return arr3
}

console.log(rotateArray([1,2,3,4,5], 2))