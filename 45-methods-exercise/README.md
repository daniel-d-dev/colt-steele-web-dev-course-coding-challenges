# Methods Exercise

This exercise practices defining methods within a JavaScript object. The task is to create an object with methods to calculate the area and perimeter of a square.

## Challenge Description

Define an object called `square`. This object should contain two methods:

*   `area`: Accepts the length of a side of the square as an argument and returns the area of the square (side * side).
*   `perimeter`: Accepts the length of a side of the square as an argument and returns the perimeter of the square (side * 4).

Examples:

*   `square.area(10)`      // Returns: 100
*   `square.perimeter(10)` // Returns: 40

## Solution

The solution involves creating the `square` object using an object literal.  Within the object literal, the `area` and `perimeter` methods are defined as functions.

## Key Concepts Demonstrated

*   JavaScript Objects
*   Object Literals
*   Object Methods
*   Method Definitions
*   Mathematical Operations

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `square.area()` and `square.perimeter()` methods with different side lengths and then print the *returned value* to the console using `console.log()`. For example: `console.log(square.area(10));` would print 100.