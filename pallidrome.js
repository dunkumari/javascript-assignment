// PROBLEM STATEMENT 1  : Implement a function to check if a given string is a palindrome.


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let pallidrome = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the  string
    let reverseStr = pallidrome.split('').reverse().join('');
    
    // Check if the  string is equal to its reverse
    return pallidrome === reverseStr;
}

//Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
