# Know Thy Enemy Exercise

This exercise demonstrates the use of inline event handlers in HTML, which is generally not recommended but serves to illustrate the potential drawbacks. The task is to add inline click handlers to HTML elements that print specific messages to the console.

## Challenge Description

Given the provided HTML markup (which you should not change directly), add two inline click handlers directly within the HTML:

1.  When the `<h1>` element is clicked, it should print `"boo"` to the console using `console.log('boo');`.
2.  When the `<button>` element is clicked, it should print `"clicked"` to the console using `console.log('clicked');`.

## Solution

The solution involves adding the `onclick` attribute to the `<h1>` and `<button>` elements directly in the HTML.  The `onclick` attribute's value should be the JavaScript code to be executed when the element is clicked.

## Key Concepts Demonstrated

*   HTML Inline Event Handlers (`onclick`)
*   JavaScript `console.log()`

## How to Run

1.  Open the HTML file in a web browser.  When you click the `<h1>` element, "boo" should be printed to the browser's developer console (usually opened by pressing F12).  When you click the button, "clicked" should be printed to the console. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.