// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

// const flattenObject = (obj) => {
//     let res = "";
//     for(let i in obj){
//         res += `${obj[i]}.`
//         for(let i in obj){
//             res += `${obj[i]}.`
//             for(let i in obj){
//                 res += `${obj[i]}.`
//             }
//         }
//     }
// }



//////////////////


const flattenObject = (obj, parentKey = "", result = {}) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      // Check if value is a plain non-null object
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
};



const input = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(input));

