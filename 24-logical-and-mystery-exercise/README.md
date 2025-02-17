# Logical AND Mystery Exercise

This exercise practices using the logical AND operator (`&&`) in JavaScript conditionals. The task is to determine the correct value for a variable to satisfy a conditional statement and produce a specific output.

## Challenge Description

A conditional statement using the logical AND operator is provided in `index.js`.  The goal is to determine the value of the `mystery` variable that will make the entire conditional expression evaluate to `true` and cause `"YOU GOT IT!!!"` to be printed to the console. You are only allowed to change the initial value of `mystery`; you cannot modify the conditional logic.

## Solution

The solution is to set `mystery` to `"Password7"`.

**Explanation:**

The conditional statement checks three conditions using the `&&` operator:

1.  `mystery[0] === 'P'`: The first character of `mystery` must be 'P'.
2.  `mystery.length > 5`: The length of `mystery` must be greater than 5.
3.  `mystery.indexOf('7') !== -1`: The string `mystery` must contain the character '7'.

All three of these conditions *must* be true for the entire expression to be true.  `"Password7"` satisfies all three conditions.

## Key Concepts Demonstrated

*   JavaScript Logical AND Operator (`&&`)
*   String Indexing
*   String Length
*   String `indexOf()` Method

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The code will execute, and if `mystery` is set correctly, `"YOU GOT IT!!!"` will be printed to the console.