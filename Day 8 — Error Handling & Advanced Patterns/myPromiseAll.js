// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    // Empty input resolves immediately with an empty array
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value; // Preserve insertion order
        resolvedCount++;

        if (resolvedCount === promises.length) {
          resolve(results);
        }
      }).catch(reject); // Reject immediately on first failure
    });
  });
};


const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error("Failed:", err));