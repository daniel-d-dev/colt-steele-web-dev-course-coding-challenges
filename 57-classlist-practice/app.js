// WRITE YOUR CODE IN HERE:

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
    item.classList.toggle('highlight');
});
