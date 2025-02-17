# Our First Conditional Exercise

This exercise introduces conditional statements in JavaScript. The task is to write a function that checks if a given number is even and prints "even" to the console if it is.

## Challenge Description

A function `isEven(num)` is provided in `index.js`.  You need to write your code *inside* this function, between the specified comment lines.  The function will automatically receive a number as input through the `num` parameter.

Your code should:

*   Check if `num` is an even number.
*   If `num` is even, print the string `"even"` to the console using `console.log()`.
*   Do nothing if `num` is odd.

**Important:** Do *not* define or modify the `num` variable. It will be set externally for testing purposes.

## Solution

The solution is implemented within the `isEven(num)` function in `index.js`. The modulo operator (`%`) is used to check if `num` is divisible by 2. If the remainder is 0, the number is even, and `"even"` is printed to the console.

## Key Concepts Demonstrated

*   JavaScript Conditional Statements (`if`)
*   Modulo Operator (`%`)
*   Even/Odd Number Check

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `isEven()` function will be called with different `num` values during testing, and the output will depend on whether those numbers are even or odd.  You should see "even" printed to the console only when `num` is even.