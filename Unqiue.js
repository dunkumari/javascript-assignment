// PROBLEM STATEMENT 2 : Write a function that takes an array of integers and returns a new array with only the unique values.


function uniqueArray(arr) {
    // Create a new Set 
    const uniqueSet = new Set(arr);
    // converting set to array
    return [...uniqueSet];
}

// Test Cases:
console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueArray([10, 10, 20, 30, 30, 40])); // [10, 20, 30, 40]
console.log(uniqueArray([5, 5, 5, 5, 5])); // [5]