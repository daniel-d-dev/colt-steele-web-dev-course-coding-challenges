# String Template Literal Exercise

This exercise practices using string template literals (backticks) in JavaScript. The task is to create a formatted string that includes the values of two variables and their sum.

## Challenge Description

Two variables, `die1` and `die2`, are already defined and hold random integers between 1 and 6 (representing dice rolls). Create a new variable called `roll` that is a string formatted as follows:

"You rolled a [die1 value] and a [die2 value]. They sum to [sum of die1 and die2]"

Use a template literal to construct this string, embedding the values of `die1`, `die2`, and their sum directly within the string.

## Solution

The solution is implemented in `index.js`. A template literal is used to create the `roll` string. The values of `die1` and `die2` are embedded using `${}` syntax, and their sum is calculated directly within the template literal using `${die1 + die2}`.

## Key Concepts Demonstrated

*   JavaScript Template Literals (backticks)
*   String Interpolation (using `${}`)
*   Embedding Expressions in Template Literals

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. The variables will be declared in the JavaScript environment. You won't see any visible output unless you explicitly print the variable values to the console using `console.log(die1);`, `console.log(die2);` and `console.log(roll);`. You should see the random die values and the formatted roll string printed to the console.