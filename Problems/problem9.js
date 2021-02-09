/* RANDOM ELEMENT: What is the Big O of the following algorithm? Explain your answer. */

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ANSWER: Constant Time O(1), because the function is simply picking a random number and performing basic arithmetic operations on it.
// No matter the size of the input, the algorithm will take the same amount of time to complete.