# Nested Arrays Exercise

This exercise practices accessing and modifying elements within nested arrays in JavaScript. The task is to replace a `null` value within a nested array with a specific string.

## Challenge Description

An array called `airplaneSeats` is defined, representing rows of seats on a flight.  One middle seat is currently set to `null`.  *Without directly changing the line where the `null` value is initially set*, update the array so that the `null` value is replaced with the string `"Hugo"`. This requires accessing the correct element within the nested array.

## Solution

The solution involves using bracket notation to access the specific element within the nested array and then assigning the string `"Hugo"` to that element.  Specifically, `airplaneSeats[3][1]` refers to the element in the 4th row (index 3) and the 2nd seat (index 1) which is currently `null`.

## Key Concepts Demonstrated

*   JavaScript Arrays
*   Nested Arrays
*   Accessing Elements in Nested Arrays (Bracket Notation)
*   Modifying Elements in Nested Arrays

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `airplaneSeats` array will be created and modified in the JavaScript environment. You won't see any visible output unless you explicitly print the array's contents to the console using `console.log(airplaneSeats);`. After the modification, the console should show the updated array with "Hugo" in the middle seat.