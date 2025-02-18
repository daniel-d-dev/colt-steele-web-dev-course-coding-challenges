# Last Element Exercise

This exercise practices writing a function that accepts an array as an argument and returns a specific element (the last one). The task also includes handling the edge case of an empty array.

## Challenge Description

Write a function called `lastElement` that accepts a single array argument. The function should return the *last* element of the array *without modifying the array*. If the array is empty, the function should return `null`.

Examples:

*   `lastElement([3, 5, 7])`  // Returns: 7
*   `lastElement([1])`      // Returns: 1
*   `lastElement([])`      // Returns: `null`

## Solution

The solution involves defining the `lastElement` function, which takes an array as input. Inside the function, the length of the array is checked. If the array is empty (length is 0), `null` is returned. Otherwise, the index of the last element (length - 1) is calculated, and the element at that index is returned.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Array Arguments
*   Array Length Property
*   Array Indexing
*   Handling Edge Cases (Empty Array)
*   Returning `null`

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `lastElement` function with different array arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(lastElement([3, 5, 7]));` would print 7.