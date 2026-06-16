// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

let finalTimes;

const retry = async (fn, times) => {
    finalTimes = times;
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === times) {
        throw error;
      }
    }
  }
}

  let count = 0;
  const unstableFetch = async () => {
    count++;
    console.log(`Attempt: ${count}`);
    if (count < finalTimes) {
      throw new Error("failed");
    }

    return `Success ${count}`;
  };

  retry(unstableFetch, 3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));