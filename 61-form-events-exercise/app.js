// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productInput = document.querySelector('#product');
const quantityInput = document.querySelector('#qty');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = productInput.value;
    const qty = quantityInput.value;
    const newLI = document.createElement('li');
    newLI.innerText = `${qty} ${product}`;
    list.append(newLI);
    productInput.value = '';
    quantityInput.value = '';
});