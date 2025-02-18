# Array Access Exercise

This exercise practices accessing and modifying elements within an array in JavaScript. The task is to update specific elements of a pre-existing array.

## Challenge Description

An array called `leaderboard` is already defined and initialized with four strings.  *Without modifying the line where `leaderboard` is declared*, make the following changes:

1.  Correct the second element (index 1) of the `leaderboard` array from "Lua" to "Luna".
2.  Replace the last element (index 3) of the `leaderboard` array with "Draco".

## Solution

The solution is implemented by using bracket notation to access the array elements at the specified indices and assigning the new values.

## Key Concepts Demonstrated

*   JavaScript Arrays
*   Array Indexing (Bracket Notation)
*   Modifying Array Elements

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The `leaderboard` array will be created and modified in the JavaScript environment. You won't see any visible output unless you explicitly print the array's contents to the console using `console.log(leaderboard);`. After the modifications, the console should show `['Harry', 'Luna', 'Hermione', 'Draco']`.