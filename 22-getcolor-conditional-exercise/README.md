# getColor Conditional Exercise

This exercise practices using conditional statements (`if`, `else if`, `else`) in JavaScript.  The task is to write a function that prints a color to the console based on the value of a given phrase.

## Challenge Description

A function `getColor(phrase)` is provided in `index.js`. Write your code *inside* this function, between the specified comment lines. The function will receive a string as input via the `phrase` parameter.

Your code should implement the following logic:

1.  If `phrase` is equal to "stop", print "red" to the console.
2.  If `phrase` is equal to "slow", print "yellow" to the console.
3.  If `phrase` is equal to "go", print "green" to the console.
4.  If `phrase` is anything else, print "purple" to the console.

**Important:** Do *not* define or modify the `phrase` variable. It will be set externally for testing.

## Solution

The solution is implemented within the `getColor(phrase)` function in `index.js`. A series of `if`, `else if`, and `else` statements are used to check the value of `phrase` and print the corresponding color to the console.

## Key Concepts Demonstrated

*   JavaScript Conditional Statements (`if`, `else if`, `else`)
*   String Comparison

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `getColor()` function will be called with different `phrase` values during testing. The output will depend on the value of `phrase` and the implemented conditional logic. You should see the correct color printed to the console for each test case.