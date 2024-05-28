//PROBLEM STATEMENT 3 : Implement a recursive function to calculate the factorial of a number.

function factorial(n) {
    
    // Base case: 
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case:
    return n * factorial(n - 1);
}

// Test Cases:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(7)); // 5040
