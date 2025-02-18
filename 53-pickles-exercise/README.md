# Pickles Exercise

This exercise practices using JavaScript to manipulate the text content of HTML elements. The task is to select a specific `<span>` element and change its text.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1.  Select the `<span>` element that currently contains the text "Delicious".
2.  Change the text content of that `<span>` element to "Disgusting" using JavaScript.

**Important:** Do *not* directly modify the HTML file.  The goal is to practice manipulating HTML using JavaScript.

## Solution

The solution involves using `document.querySelector('span')` to select the `<span>` element. Then, the `innerText` property of the selected element is set to "Disgusting".

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements by Tag Name
*   Modifying Text Content of HTML Elements (`innerText`)

## How to Run

1.  Open the HTML file in a web browser. You should initially see the heading "Pickles Are Delicious". After the JavaScript code executes, the heading should change to "Pickles Are Disgusting". You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors.  If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.