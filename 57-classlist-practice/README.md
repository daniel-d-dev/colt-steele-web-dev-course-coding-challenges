# ClassList Practice

This exercise demonstrates the use of the `classList` property in JavaScript to manipulate CSS classes of HTML elements. The task is to toggle a specific class on a set of list items, effectively inverting which items have the class applied.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1. Select all the `<li>` elements in the list.
2. Iterate over all the `<li>` elements.
3. For each `<li>` element, toggle the `highlight` class.  This means that if an `<li>` element has the `highlight` class, it should be removed. If an `<li>` element does not have the `highlight` class, it should be added.

## Solution

The solution uses `document.querySelectorAll('li')` to select all the `<li>` elements, returning a NodeList.  The `forEach` method is then used to iterate over this NodeList. Inside the loop, the `classList.toggle('highlight')` method is called on each `<li>` element. This toggles the `highlight` class, adding it if it's not present and removing it if it is.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelectorAll()` Method
*   Selecting Multiple HTML Elements
*   NodeList `forEach` Method
*   Iterating over HTML Elements
*   `classList` Property
*   `classList.toggle()` Method
*   Toggling CSS Classes

## How to Run

1.  Open the `index.html` file in a web browser. You should initially see the list items with some highlighted. After the JavaScript code executes, the highlighting should be inverted (the previously highlighted items will no longer be highlighted, and the previously non-highlighted items will be highlighted). You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.
