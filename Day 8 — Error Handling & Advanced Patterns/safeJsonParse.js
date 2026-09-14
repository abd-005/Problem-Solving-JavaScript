// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.


const safeJsonParse = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
};

console.log(safeJsonParse('{"a":1}')); // { a: 1 }
console.log(safeJsonParse('bad json')); // null