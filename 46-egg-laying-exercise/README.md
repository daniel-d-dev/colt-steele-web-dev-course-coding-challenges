# Egg Laying Exercise

This exercise practices defining an object with properties and a method that modifies the object's state. The task is to create a `hen` object with properties for its name and egg count, and a method that simulates laying an egg.

## Challenge Description

Define an object called `hen`. It should have the following properties:

*   `name`: Set to the string 'Helen'.
*   `eggCount`: Set to the number 0.
*   `layAnEgg`: A method (function within the object) that increments the value of `eggCount` by 1 and returns the string "EGG".  You *must* use `this` inside the method to refer to the object's properties.

Examples:

*   `hen.name`       // Evaluates to: "Helen"
*   `hen.eggCount`   // Evaluates to: 0
*   `hen.layAnEgg()` // Evaluates to: "EGG"
*   `hen.layAnEgg()` // Evaluates to: "EGG"
*   `hen.eggCount`   // Evaluates to: 2

## Solution

The solution involves defining the `hen` object using an object literal. The `name` and `eggCount` properties are initialized as specified. The `layAnEgg` method is defined as a function that uses `this.eggCount++` to increment the `eggCount` property of the `hen` object and then returns the string "EGG".

## Key Concepts Demonstrated

*   JavaScript Objects
*   Object Literals
*   Object Properties
*   Object Methods
*   The `this` Keyword
*   Increment Operator (`++`)

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `hen` object will be created in the JavaScript environment. You can then call the `hen.layAnEgg()` method and access the `hen.eggCount` property to verify that the egg count is being updated correctly. You will need to use `console.log()` to print the values to the console. For example:  `console.log(hen.layAnEgg());` and `console.log(hen.eggCount);`