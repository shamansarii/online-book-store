let inputEl
const price = 5.99

function initialize() {
  inputEl = document.querySelector('input')
  updateTotalAmount(0)
}

function inc() {
  inputEl.value = parseInt(inputEl.value) + 1;
  updateTotalAmount(inputEl.value)
}

function dec() {
  if (+inputEl.value <= 0) return
  inputEl.value = parseInt(inputEl.value) - 1;
  updateTotalAmount(inputEl.value)
}

function updateTotalAmount(newQuantity) {
  document.querySelector('.alert span').innerHTML = (
    newQuantity * price
  ).toFixed(2)
}