# Magical Forest Circle Exercise

This exercise practices using JavaScript to manipulate the styles of HTML elements. The task is to select a div and an image and modify their CSS properties.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1.  Select the `<div>` element with the ID "container".  Set its text alignment to "center" using JavaScript.
2.  Select the `<img>` element. Use JavaScript to give it a width of 150px and a border radius of 50%.

**Remember to use camel-cased property names in JavaScript (e.g., `backgroundColor`, not `background-color`).**

## Solution

The solution involves using `document.querySelector('#container')` to select the div and setting its `style.textAlign` property to "center".  Then, `document.querySelector('img')` selects the image, and its `style.width` and `style.borderRadius` properties are set to "150px" and "50%", respectively.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements by ID and Tag Name
*   Modifying CSS Styles of HTML Elements (using camel-cased property names)

## How to Run

1.  Open the HTML file in a web browser. You should initially see the heading and image with their original styles. After the JavaScript code executes, the text within the div should be centered, and the image should have a width of 150px and a circular border radius. You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.