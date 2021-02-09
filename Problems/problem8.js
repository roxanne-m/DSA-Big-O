/* AN EFFICIENT SEARCH: In this example, we return
to the problem of searching using a more sophisticated
approach that in naive search. Assume that the input array 
is always sorted. What is the Big O of the following algorithm?
Explain your answer. */

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// ANSWER: Logarithmic time O(log(n)), because it takes in a sorted array, the function is able to cut the problem
// size in half which is a characteristic of logarithmic time complexity algorithms. 