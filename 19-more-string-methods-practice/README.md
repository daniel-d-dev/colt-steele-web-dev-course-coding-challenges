# More String Methods Practice

This exercise focuses on practicing JavaScript string methods, specifically `slice()` and `replace()`. The task is to manipulate a given string to produce a new string using these methods.

## Challenge Description

A variable called `word` is already defined and set to `"skateboard"`.  Your goal is to use string methods to transform `word` into the string `"beard"`.

1.  Use the `slice()` method to extract the substring `"board"` from `word`.
2.  Use the `replace()` method to replace the `"o"` in `"board"` with an `"e"`.
3.  Store the final result in a variable called `facialHair`.

## Solution

The solution is implemented in `index.js`. The `slice()` method is used to extract the substring, and the `replace()` method is then used to perform the character replacement. The result is assigned to the `facialHair` variable.

## Key Concepts Demonstrated

*   JavaScript String Methods:
    *   `slice()`
    *   `replace()`
*   String Manipulation

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The variables will be declared in the JavaScript environment. You won't see any visible output unless you explicitly print the variable values to the console using `console.log(word);` and `console.log(facialHair);`. You should see the original `word` and then the modified `facialHair` string printed to the console.