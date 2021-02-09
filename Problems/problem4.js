/* DOUBLER: What is the Big O of the following algorithm? Explain your answer. */

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// ANSWER: This is Linear Time O(n) because the arithmetic might be one, but the for loop makes the running times proportional to the size of the input.
// O(n) + O(1) = O(1n)  --> O(1n)/1 = O(n) ?