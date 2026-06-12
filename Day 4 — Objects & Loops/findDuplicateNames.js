// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.

const findDuplicateNames = (arr) => {
    const freq = {}
    const duplicate = []

    for (const obj of arr){
        freq[obj.name] = (freq[obj.name] || 0) + 1
    }

    for(const name in freq){
        if(freq[name]>1){
            duplicate.push(name)
        }
    }

    return duplicate

    ////////////////////////

//     const findDuplicateNames = arr => {
//     const freq = {};

//     for (const { name } of arr) {
//         freq[name] = (freq[name] || 0) + 1;
//     }

//     return Object.keys(freq).filter(name => freq[name] > 1);
// };


}


console.log(findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Ali'}]))