# Function Expression Exercise

This exercise practices defining a function using a function expression in JavaScript. The task is to create a function that calculates the square of a number.

## Challenge Description

Define a function that returns the square of a number.  **Define this function as a function expression and store it in a variable called `square`**.

**Important:** The Udemy coding exercise platform does *not* support the exponentiation operator (`**`).  Use either multiplication (`*`) or the `Math.pow()` method to calculate the square.

Examples:

*   `square(4)`  // Returns: 16
*   `square(3)`  // Returns: 9

## Solution

The solution involves defining a function expression and assigning it to the `square` variable.  The function takes one argument (`x`) and returns the product of `x` multiplied by itself (`x * x`) or `Math.pow(x, 2)`.

## Key Concepts Demonstrated

*   JavaScript Function Expressions
*   Assigning Functions to Variables
*   Mathematical Operations (Squaring)

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `square` function with different number arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(square(4));` would print 16.