# Rainbow Text Exercise

This exercise practices using JavaScript to manipulate the styles of multiple HTML elements. The task is to select a set of `<span>` elements and apply different colors to each one, creating a rainbow effect.

## Challenge Description

Given the provided HTML markup (which you should not change directly), and an array of colors provided in `app.js`, use JavaScript to:

1.  Select all the `<span>` elements within the `<h1>` tag.
2.  Iterate over the selected `<span>` elements.
3.  Assign each `<span>` element one of the colors from the `colors` array. The first `<span>` should be red, the second orange, and so on.

## Solution

The solution involves using `document.querySelectorAll('span')` to select all the `<span>` elements. Then, the `forEach` method is used to iterate over the NodeList of spans. Inside the `forEach` callback, the `style.color` property of each `<span>` is set to the corresponding color from the `colors` array using the index of the current element.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelectorAll()` Method
*   Selecting Multiple HTML Elements
*   NodeList `forEach` Method
*   Iterating over HTML Elements
*   Modifying CSS Styles of HTML Elements

## How to Run

1.  Open the HTML file in a web browser. You should initially see the word "RAINBOW" in plain text. After the JavaScript code executes, each letter should be a different color, creating a rainbow effect. You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.