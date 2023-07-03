const counterValue = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');

let currentValue = 0;

decrementBtn.addEventListener('click', () => {
currentValue -=1;
updateCounterValue();
});

incrementBtn.addEventListener('click', () => {
    currentValue += 1;
    updateCounterValue();

});
function updateCounterValue() {
    counterValue.textContent = currentValue;
}



















