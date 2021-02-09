/* TOWER OF HANOI: 
There are three rods and a number of disks of different 
sizes which can slide onto any rod. The puzzle starts with 
the disks neatly stacked in ascending order of size on one rod, 
the smallest disk at the top (making a conical shape). The other 
two rods are empty to begin with.

The goal of the puzzle is to move the entire stack of rods to another 
rod (can't be the original rod where it was stacked before) where it 
will be stacked in the ascending order as well. This should be done 
obeying the following rules: i) Only one disk may be moved at a time ii) 
Each move consists of taking the upper disk from one of the rods and sliding 
it onto another rod, on top of the other disks that may already be present on 
that rod. iii) A larger disk may not placed on top of a smaller disk

***************QUESTIONS*******************************************************
Derive an algorithm to solve the Tower of Hanoi puzzle.

Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

If you are given 5 disks, how do the rods look like after 7 recursive calls?

How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

What is the runtime of your algorithm?
*/

// numDisks = number of disks
// fromPeg = starting peg number
// toPeg = destination peg number
// tempPeg = temporary peg
function towerOfHanoi(numDisks, fromPeg, toPeg, tempPeg) {
  // Base Case
  // If disk is one, then total moves to move disk is one (source to destination)
  if (numDisks === 1) {
    console.log(`Move disk 1 from rod ${fromPeg} to ${toPeg}`);
  }
  // Recursive Case
  else {
    towerOfHanoi(numDisks - 1, fromPeg, tempPeg, toPeg);
    console.log(`Move disk ${numDisks} from rod ${fromPeg} to rod ${toPeg}`);
    towerOfHanoi(numDisks - 1, tempPeg, toPeg, fromPeg);
  }
}

// Number of moves with 3 disks: 7
// Number of moves with 4 disks: 15
// Number of moves with 5 disks: 31
// Runtime of algorithm: Exponential time O(2^n) because the larger the amount of disks, the more output we have and the running time grows.