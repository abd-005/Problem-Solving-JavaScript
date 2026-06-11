// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

const invertObject = (obj) => {
    const newObj = {}
    for(key in obj){
        console.log(obj[key])
        newObj[obj[key]] = key
    }
    return newObj
}

console.log(invertObject({a: 1, b: 2}))