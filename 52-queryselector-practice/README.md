# querySelector Practice

This exercise practices using `querySelector` and `querySelectorAll` in JavaScript to select HTML elements. The task is to select specific elements based on their class and attribute values.

## Challenge Description

Given the provided HTML markup (which you should not change), write JavaScript code in `app.js` to select the following elements:

1.  Select *all* elements that have the class `"done"` and store them in a variable called `doneTodos`.
2.  Select the *single* checkbox element and store it in a variable called `checkbox`.  There are multiple input elements, so you must use the `type` attribute to select the correct one.

## Solution

The solution involves using `document.querySelectorAll('.done')` to select all elements with the class "done" and storing the NodeList in the `doneTodos` variable.  Then, `document.querySelector('input[type="checkbox"]')` is used to select the checkbox input element and store it in the `checkbox` variable.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   `document.querySelectorAll()` Method
*   Selecting HTML Elements by Class
*   Selecting HTML Elements by Attribute Value
*   Storing Elements in Variables

## How to Run

1.  Open the HTML file in a web browser. You will need to open the browser's developer console (usually by pressing F12). You can then use the console to inspect the `doneTodos` and `checkbox` variables. For example, typing `console.log(doneTodos)` in the console should display a NodeList of the elements with the class "done", and `console.log(checkbox)` should display the checkbox input element. If the elements are selected correctly, these variables will reference the corresponding DOM nodes.  If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM.  You would then need to adapt the test to verify your code.