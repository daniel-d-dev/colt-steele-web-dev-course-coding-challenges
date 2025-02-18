# Sum Array Exercise

This exercise practices writing a function that iterates over an array of numbers and calculates their sum.

## Challenge Description

Write a function called `sumArray` which accepts a single argument: an array of numbers. The function should return the sum of all the numbers in the array.

Examples:

*   `sumArray([1, 2, 3])`   // Returns: 6
*   `sumArray([2, 2, 2, 2])` // Returns: 8
*   `sumArray([50, 50, 1])`  // Returns: 101

**Hints:**

*   Initialize a variable to store the running total (start at 0).
*   Loop through the array, adding each element to the total.
*   Return the final total after processing all elements.

## Solution

The solution involves defining the `sumArray` function, which takes an array of numbers as input (`numbers`). Inside the function:

1.  A variable `total` is initialized to 0.
2.  A `for` loop iterates over the `numbers` array.
3.  In each iteration, the current number `numbers[i]` is added to the `total`.
4.  After the loop completes, the final `total` (the sum of all numbers) is returned.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Array Arguments
*   `for` Loops
*   Array Iteration
*   Accumulating a Sum

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `sumArray` function with different array arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(sumArray([1, 2, 3]));` would print 6.