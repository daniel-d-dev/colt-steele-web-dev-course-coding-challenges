# Form Events Exercise

This exercise practices using JavaScript to handle form submission events. The task is to prevent the default form submission behavior and process the form data.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1.  Select the form element and assign it to a variable named `form`.
2.  Select the product input field (text input) and assign it to a variable named `productInput`.
3.  Select the quantity input field (number input) and assign it to a variable named `quantityInput`.
4.  Add a submit event listener to the form.
5.  Inside the event listener:
    *   Prevent the default form submission behavior.
    *   Get the values from the `productInput` and `quantityInput` fields.
    *   Create a new `<li>` element.
    *   Set the text content of the new `<li>` element to the format: `${qty} ${product}` (e.g., "2 Apples").
    *   Append the new `<li>` element to the unordered list with the ID "list".
    *   Clear the input fields.

## Solution

The solution involves selecting the form and input elements using `document.querySelector()`. An event listener is added to the form's `submit` event. Inside the listener's callback function, `e.preventDefault()` prevents the default form submission.  The values from the input fields are retrieved. A new list item is created, its text content is set, and it is appended to the list. Finally, the input fields are cleared.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements
*   Form `submit` Event
*   `preventDefault()` Method
*   Event Listeners
*   Creating and Appending HTML Elements
*   Form Input Values

## How to Run

1.  Open the HTML file in a web browser. You should see the form and an empty unordered list. When you fill out the form and submit it, the new list item should be added to the list, and the input fields should be cleared. You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.