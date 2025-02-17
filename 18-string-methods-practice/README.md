# String Methods Practice

This exercise focuses on practicing JavaScript string methods, specifically `trim()` and `toLowerCase()`. The task is to create a new variable containing a modified version of an existing string.

## Challenge Description

A variable called `message` is already defined in `index.js`. Without modifying the original `message` variable, create a new variable called `whisper`.  `whisper` should be a lowercase version of `message` with any leading or trailing whitespace removed. Use two string methods and chain them together.

## Solution

The solution is implemented in `index.js`.  The `trim()` method is called on the `message` string to remove whitespace from both ends.  The `toLowerCase()` method is then chained to the result of `trim()` to convert the string to lowercase.  The final result is assigned to the `whisper` variable.

## Key Concepts Demonstrated

*   JavaScript String Methods:
    *   `trim()`
    *   `toLowerCase()`
*   Method Chaining

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The variables will be declared in the JavaScript environment. You won't see any visible output unless you explicitly print the variable values to the console using `console.log(message);` and `console.log(whisper);`.  You should see the original `message` and then the modified `whisper` string printed to the console.