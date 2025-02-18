# Input Event Practice

This exercise practices using the `input` event in JavaScript. The task is to update the text of an `<h1>` element dynamically based on the value of a text input field.

## Challenge Description

Given the provided HTML markup (which you should not change directly), write JavaScript code to:

1.  The `<h1>` element should initially display the text "Enter Your Username" (this is already set in the markup).
2.  Whenever an `input` event is fired on the `<input>` element:
    *   Update the `<h1>` element to display "Welcome, " followed by the current value from the text input.
3.  If the `<input>` field becomes empty, update the `<h1>` element to display "Enter Your Username" again.

**Important:** Listen for the `input` event, *not* the `change` event. The `input` event fires as the user types, whereas the `change` event only fires when the input loses focus.

## Solution

The solution involves selecting the input and `<h1>` elements using `document.querySelector()`. An event listener is added to the input field for the `input` event. Inside the listener's callback function, the text content of the `<h1>` is updated based on the current value of the input field.  An `if` statement checks if the input is empty and sets the `<h1>` text appropriately.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements
*   `input` Event
*   Event Listeners
*   Dynamically Updating Text Content

## How to Run

1.  Open the HTML file in a web browser. You should initially see "Enter Your Username" in the `<h1>`. As you type in the text input, the `<h1>` should update to display "Welcome, " followed by your input. When you clear the input field, the `<h1>` should revert to "Enter Your Username". You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.