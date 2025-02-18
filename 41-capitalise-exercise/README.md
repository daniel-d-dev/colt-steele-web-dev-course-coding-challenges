# Capitalize Exercise

This exercise practices writing a function that manipulates strings. The task is to create a function that capitalizes the first letter of a given string and returns the modified string.

## Challenge Description

Define a function called `capitalize` that accepts a string argument. The function should return a *new* string with the first letter of the input string capitalized, while the rest of the string remains unchanged.

Examples:

*   `capitalize('eggplant')`   // Returns: "Eggplant"
*   `capitalize('pamplemousse')` // Returns: "Pamplemousse"
*   `capitalize('squid')`      // Returns: "Squid"

**Hints:**

*   Remember that strings are immutable in JavaScript. You cannot directly modify the original string. You must create and return a *new* string.
*   Extract the first letter of the string.
*   Capitalize the first letter.
*   Slice the rest of the original string (from the second character onwards).
*   Concatenate the capitalized first letter with the rest of the string.

## Solution

The solution involves defining the `capitalize` function, which takes a string argument (`word`). Inside the function:

1.  The first character of the string is extracted using `word[0]`.
2.  The `toUpperCase()` method is called on the first character to capitalize it.
3.  The rest of the string (from index 1 to the end) is extracted using `word.slice(1)`.
4.  The capitalized first character and the rest of the string are concatenated using the `+` operator.
5.  The resulting new string is returned.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with String Arguments
*   String Immutability
*   String Indexing
*   String `toUpperCase()` Method
*   String `slice()` Method
*   String Concatenation

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `capitalize` function with different string arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(capitalize('eggplant'));` would print "Eggplant".