const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:

const allLetters = document.querySelectorAll('span');

allLetters.forEach((letter, index) => {
    letter.style.color = colors[index];
});