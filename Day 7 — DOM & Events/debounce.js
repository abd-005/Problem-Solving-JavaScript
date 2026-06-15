// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.



const debounce = (fn, delay) => {
    let timeOutId;
    return function(...args) {
        
        clearTimeout(timeOutId)
        // console.log(fn(...args))
        
        timeOutId = setTimeout(()=>{
            fn(...args)
        }, delay)
        
    }
    
}

const search = (parameter) => console.log(`Searching for: ${parameter}`)


const debouncedSearch =  debounce(search, 3000)

debouncedSearch("he")
debouncedSearch("hel")
debouncedSearch("hell")
debouncedSearch("hello")