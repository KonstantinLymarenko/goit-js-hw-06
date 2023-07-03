const nameInput = document.querySelector('#name-imput');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', (event) => {
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymos';
         } else {
            nameOutput.textContent = nameInput.value;
         }
});


