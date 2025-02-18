# Arrow Function Exercise

This exercise practices defining a function using arrow function syntax in JavaScript. The task is to create a function that returns a personalized greeting.

## Challenge Description

Write an **arrow function expression** called `greet`. It should accept a single string argument, representing a person's name. It should return a greeting string as shown below:

*   `greet("Hagrid")` should return this string: `Hey Hagrid!`
*   `greet("Luna")` should return this string: `Hey Luna!`

**Be sure to use arrow function syntax!**

## Solution

The solution involves defining the `greet` function using arrow function syntax. The function takes one argument (`name`) and uses a template literal to construct the greeting string, which is then returned.

## Key Concepts Demonstrated

*   JavaScript Arrow Functions
*   Function Expressions
*   Template Literals
*   String Interpolation

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `greet` function with different string arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(greet("Hagrid"));` would print "Hey Hagrid!".