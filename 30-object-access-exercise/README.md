# Object Access Exercise

This exercise practices accessing properties within a JavaScript object. The task is to construct a formatted string using data from the object.

## Challenge Description

A `restaurant` object is defined, containing properties like `name`, `address`, `city`, `state`, and `zipcode`.  The `address` property is randomly generated. Your task is to create a variable named `fullAddress` that contains a string constructed from the `address`, `city`, `state`, and `zipcode` properties of the `restaurant` object. The string should be formatted exactly as shown in the example:

"64 Johnson Ave, Brooklyn, NY 11206"

Pay close attention to the commas and spaces in the formatting.

## Solution

The solution involves accessing the object properties using bracket notation (or dot notation) and using template literals to construct the `fullAddress` string.

## Key Concepts Demonstrated

*   JavaScript Objects
*   Object Property Access (Bracket Notation or Dot Notation)
*   Template Literals
*   String Concatenation/Interpolation

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `restaurant` object and the `fullAddress` variable will be created in the JavaScript environment. You won't see any visible output unless you explicitly print the variable values to the console using `console.log(restaurant)` and  `console.log(fullAddress)`. The `fullAddress` string should match the specified format, using the randomly generated address.