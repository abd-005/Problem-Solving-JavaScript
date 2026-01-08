// Problem 1: Reverse a String

function reverseString(str){
    let reverse = ''
    for (let i = str.length -1 ; i>=0; i--){
        reverse += str[i];
    }
    return reverse
}

// console.log(reverseString('hello'))


// Problem 2: Count Vowels in a String

function countVowel (str){
    const vowel = 'aeiouAEIOU'
    let count = 0
    for(let char of str){
        if(vowel.includes(char)){
            count++
        }
    }
    return count;
}

console.log(countVowel("programming"))