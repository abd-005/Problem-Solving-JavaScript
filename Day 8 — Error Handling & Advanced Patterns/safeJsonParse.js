// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.


const safeJsonParse = (props) => {
    let res;
    try {
        res = JSON.parse(props)
    } catch (error) {
        res = null
    }
    return res
}

console.log(safeJsonParse('{"a":1}'))
console.log(safeJsonParse('bad json'))