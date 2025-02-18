# Map Practice

This exercise practices using the `map()` method on arrays in JavaScript. The task is to transform an array of objects into a new array containing only the first names from the objects.

## Challenge Description

An array of objects called `fullNames` is provided. Each object in the array has `first` and `last` properties, representing the first and last names of Harry Potter characters.  Use the `map()` method to create a new array called `firstNames`.  The `firstNames` array should contain only the *first names* extracted from the `fullNames` array.

The expected output is:

['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

**Important:** The `fullNames` array is pre-loaded into the `index.js` file.  If you don't see it, click the "Reset code" link.

## Solution

The solution involves using the `map()` method on the `fullNames` array.  The callback function passed to `map()` should take each object from the `fullNames` array as an argument and return the value of the `first` property of that object.

## Key Concepts Demonstrated

*   JavaScript Arrays
*   Array `map()` Method
*   Callback Functions
*   Object Property Access

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `fullNames` array will be available, and your code using `map()` will create the `firstNames` array.  You will need to use `console.log(firstNames);` to print the contents of the `firstNames` array to the console to verify the output.