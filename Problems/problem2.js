/* EVEN OR ODD: What is the Big O of the following algorithm? Explain your answer */

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// ANSWER: This is Constant Time O(1) because it uses basic arithmetic operations and only runs one or two operations despite the size of the input.
// The algorithm will take the same amount of time to complete.