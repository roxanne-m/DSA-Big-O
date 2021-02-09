/* WHAT AM I? What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer. */

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// ANSWER: This algorithm has a conditional if statement and for loop that check if 
// n is not a prime number, if they meet the conditions in first if statement or nested if statement within 
// the for loop, they return false (are NOT prime numbers). If they do not meet those conditional statements
// then return true (ARE prime numbers).
// Big O: Linear time O(n), because the n is directly correlated with the argument. The higher the number, the more calculations have to be performed.