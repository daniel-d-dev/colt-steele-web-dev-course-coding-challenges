# Checkerboard Exercise

This exercise focuses on using CSS's `nth-of-type` selector to create a checkerboard pattern.  The HTML in `index.html` and the styles in `NO_TOUCHING.css` should *not* be modified. All CSS rules for the checkerboard should be written in `styles.css`.

## Challenge Description

The `index.html` file contains 25 `<div>` elements, each with the class `square`. Create a checkerboard pattern by styling these squares in `styles.css`:

*   Even-numbered squares should have a black background.
*   Odd-numbered squares should have a red background.

**Important:** The solution must select both even and odd squares individually.  Simply changing the background color of the entire board will not meet the exercise requirements.

## Solution

The solution is implemented in `styles.css`.  The `:nth-of-type(even)` and `:nth-of-type(odd)` CSS pseudo-classes are used to target the even and odd squares respectively, and set their background colors.

## Key Concepts Demonstrated

*   CSS Selectors:
    *   `:nth-of-type(even)`
    *   `:nth-of-type(odd)`

## How to Run

1.  Open the `index.html` file in a web browser.  The 5x5 grid of squares should display a checkerboard pattern with alternating red and black squares.