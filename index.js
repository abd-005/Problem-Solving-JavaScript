const prompt = require('prompt-sync')();

// Problem 1: Reverse a String

function reverseString(){
    const str = prompt("Enter string for reverse: ");
    let reverse = ''
    for (let i = str.length -1 ; i>=0; i--){
        reverse += str[i];
    }
    return reverse
}

// console.log(reverseString());


// Problem 2: Count Vowels in a String

function countVowel (){
    const str = prompt("Enter string for Count Vowel: ");
    const vowel = 'aeiouAEIOU'
    let count = 0
    for(let char of str){
        if(vowel.includes(char)){
            count++
        }
    }
    return count;
}
// console.log(countVowel())


// Problem 3: Check for Palindrome

function isPalindrome(){
    const input = prompt("Enter string check Palindrome: ");
    const lowerStr = input.toLowerCase();
    return lowerStr === reverseString(lowerStr);
}

// console.log(isPalindrome())


// Problem 4: Find the Maximum Number

function findMaxNum(){
    const input = prompt('Enter numbers separated by commas: ');
    const arr = input.split(',').map(Number);

    if (arr.length === 0) return undefined
    
    let max = arr[0];

    for(let i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findMaxNum()); 