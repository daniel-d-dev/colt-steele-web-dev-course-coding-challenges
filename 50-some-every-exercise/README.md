# Some/Every Exercise

This exercise practices using the `every()` method on arrays in JavaScript. The task is to create a function that checks if all numbers in an array are even.

## Challenge Description

Define a function called `allEvens` that accepts a single array of numbers as an argument. If the array contains *all* even numbers, the function should return `true`. Otherwise, it should return `false`. Use either the `some()` or `every()` array method to accomplish this (only one of them is appropriate for this task).

Examples:

*   `allEvens([2, 4, 6, 8])`   // Returns: `true`
*   `allEvens([1, 4, 6, 8])`   // Returns: `false`
*   `allEvens([1, 2, 3])`   // Returns: `false`

## Solution

The solution involves defining the `allEvens` function, which takes an array of numbers as input. Inside the function, the `every()` method is called on the numbers array. The callback function passed to `every()` should take a single number as an argument and return `true` if the number is even (i.e., `num % 2 === 0`), and `false` otherwise. The `every()` method will then return `true` only if the callback function returns `true` for *every* element in the array.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Array Arguments
*   Array `every()` Method
*   Callback Functions
*   Modulo Operator (`%`)
*   Even/Odd Number Check

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `allEvens()` function will be defined, and when called with an array of numbers, it should return a boolean value. You will have to use `console.log()` to print the result of the function call to the console to verify that it is working correctly.  For example: `console.log(allEvens([2, 4, 6, 8]));`