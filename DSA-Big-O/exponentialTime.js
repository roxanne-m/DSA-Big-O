/* Exponential Time O(2^n) (Not ideal. Highest increasing time complexity.) */

/* 
Algorithms with exponential time complexity (O(2^n)) 
have running times that grow rapidly with any increase 
in input size. For an input of size 2, an exponential 
time algorithm will take 2^2 = 4 time. With an input of 
size 10, the same algorithm will take 2^10 = 1024 time
*/

function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}

countTriangle(2);
countTriangle(4);
countTriangle(16);

// Performance for inputs of size 2, 4, and 16:
// 6 ticks with input size 2
// 65,552 ticks with input size 16

// As the input size increases, the # of operations to count the dots increases
// exponentially making the running time of this algorithm O(2^n)