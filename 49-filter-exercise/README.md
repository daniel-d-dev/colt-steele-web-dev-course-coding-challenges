# Filter Exercise

This exercise practices using the `filter()` method on arrays in JavaScript. The task is to create a function that filters an array of usernames and returns a new array containing only usernames shorter than 10 characters.

## Challenge Description

Write a function called `validUserNames` that accepts an array of usernames (strings) as an argument. The function should return a *new* array containing only the usernames that are less than 10 characters in length.

For example:  If the input array is `['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']`, the function should return `["mark", "carrie98", "MoanaFan"]`.

**Note:** The usernames array is provided behind the scenes for testing. You only need to write the function itself. You can define the function using a regular function declaration or an arrow function.

## Solution

The solution involves defining the `validUserNames` function, which takes an array of usernames as input. Inside the function, the `filter()` method is called on the usernames array. The callback function passed to `filter()` should take a single username as an argument and return `true` if the username's length is less than 10, and `false` otherwise.  The `filter()` method will then return a *new* array containing only the usernames for which the callback function returned `true`.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Array Arguments
*   Array `filter()` Method
*   Callback Functions
*   String `length` Property

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `validUserNames()` function will be defined, and when called with an array of usernames, it should return a new filtered array. You will have to use `console.log()` to print the result of the function call to the console to verify that it is working correctly.  For example: `console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));`