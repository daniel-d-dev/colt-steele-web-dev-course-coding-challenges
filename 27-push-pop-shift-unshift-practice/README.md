# Push/Pop/Shift/Unshift Practice

This exercise practices using the `push()`, `pop()`, `shift()`, and `unshift()` array methods in JavaScript. The task is to modify an existing array by removing and adding elements at the beginning and end.

## Challenge Description

An array called `planets` is already defined and initialized.  *Without directly modifying the initial array declaration*, perform the following operations:

1.  Remove the first element ("The Moon") from the `planets` array.
2.  Add "Saturn" to the end of the `planets` array.
3.  Add "Mercury" to the beginning of the `planets` array.

The final `planets` array should contain the following elements in this order: `["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]`.

**Important:** Use the array methods `shift()`, `push()`, and `unshift()` to perform these operations.  Do *not* directly modify the array elements using bracket notation or reassign the `planets` variable.

## Solution

The solution is implemented by calling the appropriate array methods on the `planets` array in the correct sequence.  (The actual JavaScript code to do this would be provided separately, of course.)

## Key Concepts Demonstrated

*   JavaScript Arrays
*   Array Methods:
    *   `shift()`
    *   `push()`
    *   `unshift()`

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `planets` array will be created and modified in the JavaScript environment. You won't see any visible output unless you explicitly print the array's contents to the console using `console.log(planets);`. After the modifications, the console should show `["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]`.