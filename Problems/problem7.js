/* COMPUTE THE SEQUENCE: What does the following algorithm do? What is its runtime complexity? Explain your answer. */

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// ANSWER: The algorithm above creates an array of the fibonacci sequence. 
// It takes in a number argument, iterates through the for loop, checks the conditional statements, and stores information within the result array and ultimately returns it.
// The algorithm's complexity is Linear time O(n) due to the for loop.
// Its runtime complexity is directly proportional to the size (n) of the input. 