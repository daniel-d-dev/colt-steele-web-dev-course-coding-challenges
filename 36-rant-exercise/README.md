# Rant Exercise

This exercise practices defining and calling a function that accepts an argument and performs an operation (converting to uppercase and printing) multiple times.

## Challenge Description

Define a function called `rant` that accepts a single string argument named `message`. The function should print the uppercase version of the `message` string to the console *three separate times*. For example, calling `rant("I hate beets")` should produce the following output:

I HATE BEETS
I HATE BEETS
I HATE BEETS

## Solution

The solution involves defining the `rant` function, which takes the `message` argument. Inside the function, the `message` is converted to uppercase using `message.toUpperCase()` and then printed to the console using `console.log()` three times.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Arguments
*   String `toUpperCase()` Method
*   `console.log()`

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the output. If you are using a Node.js environment, you can run `node index.js` from the command line. The `rant()` function will be defined, and when called with a message, the uppercase version of that message will be printed to the console three times.