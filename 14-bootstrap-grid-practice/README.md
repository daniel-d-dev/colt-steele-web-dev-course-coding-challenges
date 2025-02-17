# Bootstrap Grid Practice

This exercise focuses on practicing the Bootstrap grid system. The HTML in `index.html` already includes Bootstrap. The task is to create a specific layout using Bootstrap's grid classes.

## Challenge Description

Recreate the layout shown in the image using Bootstrap's grid system.  The layout consists of two rows:

1.  **First Row:** Two columns:
    *   One-third width (using appropriate `col-*` class)
    *   Two-thirds width (using appropriate `col-*` class)

2.  **Second Row:** Three columns:
    *   One-quarter width (using appropriate `col-*` class)
    *   One-half width (using appropriate `col-*` class)
    *   One-quarter width (using appropriate `col-*` class)

**Important:** Explicitly use column size classes (e.g., `col-4`, `col-8`, etc.) for *all* columns.  Do not rely on the default behavior of `col` without a size.  Adding background colors to the columns is recommended for visualization but is not strictly required for the exercise.

## Solution

The solution is implemented by adding the necessary Bootstrap grid classes (`.container`, `.row`, `.col-*`) to the HTML in `index.html` to create the two rows and the columns within them.

## Key Concepts Demonstrated

*   Bootstrap Grid System:
    *   Containers (`.container`)
    *   Rows (`.row`)
    *   Columns (`.col-*`)

## How to Run

1.  Open the `index.html` file in a web browser. The layout should match the image, with the columns arranged correctly within their rows.