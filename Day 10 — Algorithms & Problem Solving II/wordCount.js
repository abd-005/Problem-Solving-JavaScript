// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

const wordCount = (sentence) => {
    const words = sentence.split(" ")

    let arr = {}

    for (let word of words) {
        if(arr[word]){
            arr[word]++
        }else{
            arr[word] = 1
        }
    }
        
        
        return arr
        
}

console.log(wordCount('the cat sat on the mat'))