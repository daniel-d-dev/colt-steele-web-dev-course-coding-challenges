# 100 Button Insanity Exercise

This exercise practices using JavaScript to dynamically create and add HTML elements to the page. The task is to generate 100 button elements and append them to a container `<div>`.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1. Create exactly 100 new `<button>` elements.
2. Each button must have some text inside it (the content of the text doesn't matter).
3. Each button *must* be appended inside the `<div>` element with the ID "container".

## Solution

The solution involves selecting the container `<div>` using `document.getElementById('container')`. A `for` loop iterates 100 times. Inside the loop, a new `<button>` element is created using `document.createElement('button')`.  The `innerText` property of the button is set to the desired text. Finally, the button is appended to the container `<div>` using `container.appendChild(button)`.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.getElementById()` Method
*   `document.createElement()` Method
*   `appendChild()` Method
*   `for` Loops
*   Dynamically Creating HTML Elements
*   Adding Elements to the DOM

## How to Run

1.  Open the `index.html` file in a web browser. You should initially see the heading. After the JavaScript code executes, 100 buttons should appear inside the container `<div>`. You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.