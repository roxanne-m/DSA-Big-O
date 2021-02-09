/* CREATING PAIRS: What is the Big O of the following algorithm? Explain your answer. */

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// ANSWER: Polynomial time O(n^k), more specifically O(n^2), because there are two nested for loops.
// Basically have two O(n) algorithms but when multiplied (O n*n) = O(n^2).