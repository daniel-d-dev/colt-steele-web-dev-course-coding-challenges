# Return Value Practice

This exercise practices writing a function that returns a value. The task is to create a function that multiplies two numbers and returns the result.

## Challenge Description

Write a function called `multiply` that accepts two numerical arguments. The function should multiply these two arguments together and *return* the product.  Do *not* print the result to the console; instead, use the `return` keyword to send the value back from the function.

Examples:

*   `multiply(2, 3)`  // Returns: 6
*   `multiply(9, 9)`  // Returns: 81
*   `multiply(5, 4)`  // Returns: 20

## Solution

The solution involves defining the `multiply` function, which takes two arguments. Inside the function, the two arguments are multiplied together using the `*` operator, and the result is returned using the `return` keyword.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Arguments
*   Return Values from Functions
*   Mathematical Operators (`*`)

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line.  You will need to *call* the `multiply` function and then print the *returned value* to the console using `console.log()`.  For example: `console.log(multiply(2, 3));` would print 6.