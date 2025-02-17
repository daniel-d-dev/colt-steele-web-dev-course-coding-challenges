# Nested Conditionals Practice

This exercise practices working with nested conditional statements in JavaScript. The task is to determine the correct value for a variable to satisfy a nested conditional and produce a specific output.

## Challenge Description

A nested conditional structure is provided in `index.js` that uses a variable called `num`.  The goal is to determine the value of `num` that will cause the string `"YOU GOT ME!"` to be printed to the console.  You are only allowed to change the initial value of `num`; you cannot modify the conditional logic itself.

## Solution

The solution is to set `num` to `102`.

**Explanation:**

The outer `if` condition checks if `num` is less than or equal to 100. If it is, a nested `if` checks if it's greater than or equal to 50. If `num` is greater than 100, the `else` block is executed.  Inside the `else`, there's another `if` that checks if `num` is less than 103.  If it is, a final nested `if` checks if `num` is even. Only when all these conditions are met will `"YOU GOT ME!"` be printed.

Therefore, `num` must be greater than 100, less than 103, and even. 102 satisfies all these conditions.

## Key Concepts Demonstrated

*   JavaScript Nested Conditional Statements (`if`, `else`)
*   Logical Flow of Nested Conditionals
*   Modulo Operator (`%`)
*   Even/Odd Number Check

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The code will execute, and if `num` is set correctly, `"YOU GOT ME!"` will be printed to the console.