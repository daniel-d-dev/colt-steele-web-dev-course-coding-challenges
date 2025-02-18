# For...Of Practice

This exercise practices iterating over arrays using a `for...of` loop in JavaScript. The task is to access each element of an array and perform a calculation (squaring the number) on it.

## Challenge Description

An array called `numbers` is provided. Use a `for...of` loop to iterate over the `numbers` array. Inside the loop, calculate the square of each number (the number multiplied by itself) and print the result to the console.

**Important:** Use a `for...of` loop as requested.  Do *not* use other loop types (like `for` or `while`).  Also, avoid using the exponentiation operator (`**`) as it's not supported in some environments; use `Math.imul(number, number)` or simply `number * number` instead.

The output should be:

1\
4\
9\
16\
25\
36\
49\
64\
81\

## Solution

The solution involves a `for...of` loop that iterates directly over the elements of the `numbers` array. Inside the loop, the current element (a number) is accessed and its square is calculated using `Math.imul(number, number)` (or `number * number`). The result is then printed to the console.

## Key Concepts Demonstrated

*   JavaScript `for...of` Loops
*   Array Iteration
*   Mathematical Operations (Squaring)

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `for...of` loop will execute, and the squares of the numbers in the `numbers` array will be printed to the console.
