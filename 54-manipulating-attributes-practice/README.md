# Manipulating Attributes Practice

This exercise practices using JavaScript to manipulate attributes of HTML elements. The task is to select an image element and change its `src` and `alt` attributes.

## Challenge Description

Given the provided HTML markup (which you should not change directly), use JavaScript to:

1.  Select the `<img>` element.
2.  Change its `src` attribute to: `https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200`
3.  Change its `alt` attribute to `"chicken"`.

## Solution

The solution involves using `document.querySelector('img')` to select the image element. Then, the `src` and `alt` properties of the selected element are set to the desired values.

## Key Concepts Demonstrated

*   JavaScript DOM Manipulation
*   `document.querySelector()` Method
*   Selecting HTML Elements by Tag Name
*   Modifying HTML Element Attributes (`src`, `alt`)

## How to Run

1.  Open the HTML file in a web browser. You should initially see the image with its original source and alt text. After the JavaScript code executes, the image source should change to the new URL, and the alt text should change to "chicken". You may need to open the browser's developer console (usually by pressing F12) to ensure there are no errors. If you are using a Node.js environment, you will need a suitable library for working with the DOM as Node.js doesn't have a built-in DOM. You would then need to adapt the test to verify your code.