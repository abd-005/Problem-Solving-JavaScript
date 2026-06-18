// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

const flattenObject = (obj) => {
    let res = "";
    for(let i in obj){
        res += `${obj[i]}.`
        for(let i in obj){
            res += `${obj[i]}.`
            for(let i in obj){
                res += `${obj[i]}.`
            }
        }
    }
}

console.log(flattenObject({a: {b: {c: 1}}}))

