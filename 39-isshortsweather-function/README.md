# isShortsWeather Function

This exercise practices writing a function that accepts an argument, performs a comparison, and returns a boolean value. The task is to determine if it's "shorts weather" based on a given temperature.

## Challenge Description

Write a function called `isShortsWeather` that accepts a single numerical argument, which represents the temperature (in Fahrenheit).  The function should return `true` if the temperature is greater than or equal to 75. Otherwise, it should return `false`.

Examples:

*   `isShortsWeather(80)`  // Returns: `true`
*   `isShortsWeather(48)`  // Returns: `false`
*   `isShortsWeather(75)`  // Returns: `true`

## Solution

The solution involves defining the `isShortsWeather` function, which takes one argument (`temperature`). Inside the function, an `if` statement checks if the `temperature` is greater than or equal to 75. If it is, the function returns `true`. Otherwise, it returns `false`.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Arguments
*   Comparison Operators (`>=`)
*   Boolean Return Values

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `isShortsWeather` function with different temperature values and then print the *returned boolean value* to the console using `console.log()`. For example: `console.log(isShortsWeather(80));` would print `true`.