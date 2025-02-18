# Days Of The Week Exercise

This exercise practices writing a function that uses a number as input to return a corresponding day of the week.  The task also includes handling invalid input.

## Challenge Description

Write a function called `returnDay`. This function takes one parameter (a number from 1-7) and returns the corresponding day of the week (1 is Monday, 2 is Tuesday, etc.). If the number is less than 1 or greater than 7, the function should return `null`.  Monday is considered the first day of the week for this exercise.

Examples:

*   `returnDay(1)`  // Returns: "Monday"
*   `returnDay(7)`  // Returns: "Sunday"
*   `returnDay(4)`  // Returns: "Thursday"
*   `returnDay(0)`  // Returns: `null`

**Hint:** Store the days of the week in an array or use an object with numerical keys. Use the input number to retrieve the corresponding day name from the array/object and return that value.

## Solution

The solution involves defining the `returnDay` function, which takes a number (`day`) as input.  A `switch` statement is used to match the input number to the corresponding day of the week. If the number is within the valid range (1-7), the corresponding day name is returned.  If the number is outside this range, the `default` case returns `null`.

## Key Concepts Demonstrated

*   JavaScript Functions
*   Function Definitions with Number Arguments
*   `switch` Statements
*   Returning String Values
*   Handling Invalid Input and Returning `null`

## How to Run

1.  Open the `index.html` file in a web browser (if there is an associated HTML file). You may need to open the browser's developer console (usually by pressing F12) to see the variables if you are not printing them to the console. If you are using a Node.js environment, you can run `node index.js` from the command line. You will need to *call* the `returnDay` function with different number arguments and then print the *returned value* to the console using `console.log()`. For example: `console.log(returnDay(1));` would print "Monday".