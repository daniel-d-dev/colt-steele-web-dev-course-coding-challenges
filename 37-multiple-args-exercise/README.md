# Multiple Args Exercise

This exercise practices defining and calling a function that accepts multiple arguments and uses conditional logic. The task is to determine if two given numbers (representing dice rolls) are both 1 and print the appropriate message.

## Challenge Description

Write a function called `isSnakeEyes` that accepts two numbers as input, representing the values of two dice rolls.  If both numbers are 1, the function should print `"Snake Eyes!"` to the console. Otherwise, it should print `"Not Snake Eyes!"`.

Examples:

*   `isSnakeEyes(1, 1)`  // Output: Snake Eyes!
*   `isSnakeEyes(1, 5)`  // Output: Not Snake Eyes!
*   `isSnakeEyes(4, 5)`  // Output: Not Snake Eyes!

**Important:** For compatibility with the Udemy interpreter (as specified in the original prompt), use `console.log()` to print the output instead of returning a value.

## Solution

The solution involves defining the `isSnakeEyes` function, which takes two arguments (`roll1` and `roll2`). Inside the function, an `if` statement checks if both `roll1` and `roll2` are equal to 1 using the `&&` (AND) operator. If they are, `"Snake Eyes!"` is printed. Otherwise, `"Not Snake Eyes!"` is printed.

## Key Concepts Demonstrated

*   JavaScript Functions with Multiple Arguments
*   Conditional Logic (`if`/`else`)
*   Logical AND Operator (`&&`)

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `isSnakeEyes()` function will be defined, and when called with different pairs of numbers, the appropriate message will be printed to the console.