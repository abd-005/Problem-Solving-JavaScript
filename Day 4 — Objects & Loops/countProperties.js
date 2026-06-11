// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

const countProperties = (obj) => {
   
    // count = 0;
    // for (i in obj){
    //     if(i) count += 1;
    // }
    // return count

    ///////Other way////////

    return Object.keys(obj).length

}


console.log(countProperties({a: 1, b: 2, c: 3, d: null}))