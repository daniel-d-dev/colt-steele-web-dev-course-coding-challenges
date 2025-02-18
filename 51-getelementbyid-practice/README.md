# getElementById Practice

This exercise practices using the `getElementById()` method in JavaScript to select HTML elements. The task is to select specific elements based on their IDs and store them in variables.

## Challenge Description

Given the provided HTML markup (which you should not change), write JavaScript code in `app.js` to select the following elements using `document.getElementById()`:

1.  Select the `<img>` element with the ID "unicorn" and store it in a variable called `image`.
2.  Select the `<h1>` element with the ID "mainheading" and store it in a variable called `heading`.

**Note:** You may need to reset the code if the HTML is not pre-loaded.

## Solution

The solution involves using `document.getElementById()` with the appropriate IDs ("unicorn" and "mainheading") and assigning the returned elements to the `image` and `heading` variables, respectively.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.getElementById()` Method
*   Selecting HTML Elements by ID
*   Storing Elements in Variables

## How to Run

1.  Open the HTML file in a web browser.  You will need to open the browser's developer console (usually by pressing F12).  You can then use the console to inspect the `image` and `heading` variables.  For example, typing `console.log(image)` in the console should display the `<img>` element, and `console.log(heading)` should display the `<h1>` element.  If the elements are selected correctly, these variables will reference the corresponding DOM nodes.  If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM.  You would then need to adapt the test to verify your code.