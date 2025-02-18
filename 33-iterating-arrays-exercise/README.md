# Iterating Arrays Exercise

This exercise practices iterating over arrays using a `for` loop in JavaScript. The task is to access each element of an array and perform an operation on it (in this case, converting it to uppercase).

## Challenge Description

An array of strings called `people` is provided.  Loop over the `people` array using a `for` loop. Inside the loop, print each name in the array to the console in uppercase letters. The output should be:

SCOOBY
VELMA
DAPHNE
SHAGGY
FRED

**Hint:** Use the loop counter variable `i` as an index to access elements in the array.

## Solution

The solution involves creating a `for` loop that iterates from 0 up to (but not including) the length of the `people` array. Inside the loop, the element at the current index `i` is accessed using `people[i]`. The `toUpperCase()` method is then called on this element to convert it to uppercase, and the result is printed to the console.

## Key Concepts Demonstrated

*   JavaScript `for` Loops
*   Array Iteration
*   Array Indexing
*   String `toUpperCase()` Method

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `for` loop will execute, and the names in the `people` array will be printed to the console in uppercase.