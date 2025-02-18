# Click Events Exercise

This exercise practices using `addEventListener` in JavaScript to handle click events. The task is to attach click listeners to two buttons that log specific messages to the console.

## Challenge Description

Given the provided HTML markup (which you should not change directly), add click event listeners to the two buttons using `addEventListener`:

1.  When the button with the ID "hello" is clicked, it should log "hello" to the console.
2.  When the button with the ID "goodbye" is clicked, it should log "goodbye" to the console.

**Make sure to use `addEventListener`!**

## Solution

The solution involves selecting the two buttons using `document.querySelector('#hello')` and `document.querySelector('#goodbye')`. Then, `addEventListener('click', function() { ... })` is used to attach a click listener to each button. The callback function for each listener logs the corresponding message ("hello" or "goodbye") to the console.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements by ID
*   `addEventListener()` Method
*   Click Events
*   Event Listeners
*   Callback Functions

## How to Run

1.  Open the HTML file in a web browser. When you click the "Hello" button, "hello" should be printed to the browser's developer console (usually opened by pressing F12). When you click the "Goodbye" button, "goodbye" should be printed to the console. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.