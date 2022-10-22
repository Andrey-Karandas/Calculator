const bodyCalculate = document.querySelector('.body')
const input = document.querySelector('.input')
const buttonAll = document.querySelectorAll('.button')
const maxLength = input.getAttribute('maxlength')
const empty = ''

let operator
let oneValue
let twoValue

const className = {
  operator: '.operator',
  button: '.button',
  clear: '.clear',
  result: '.result',
  stop: '.stop',
}

// Events

bodyCalculate.addEventListener('click', (event) => {
  function addNumber() {
    if (event.target.closest(className.button)) {
      return (input.value += event.target.textContent)
    }
  }

  function saveOneValue() {
    if (event.target.closest(className.operator)) {
      return (oneValue = parseInt(input.value))
    }
  }

  function saveTwoValue() {
    if (event.target.closest(className.result)) {
      twoValue = parseInt(input.value)
      checkOperator()
    }
  }

  function saveOperator() {
    if (event.target.closest(className.operator)) {
      return (operator = event.target.textContent)
    }
  }

  function checkOperator() {
    if (operator == '-') input.value = oneValue - twoValue
    if (operator == '+') input.value = oneValue + twoValue
    if (operator == '*') input.value = oneValue * twoValue
    if (operator == '/') input.value = oneValue / twoValue
  }

  function clearInput() {
    if (event.target.closest(className.operator)) {
      return (input.value = empty)
    }
  }

  function ckeckInputLength() {
    if (input.value.length == maxLength) {
      buttonAll.forEach((button) => (button.className = 'stop'))
    } else {
      buttonAll.forEach((button) => (button.className = 'button'))
    }
  }

  addNumber(),
    saveOneValue(),
    saveTwoValue(),
    saveOperator(),
    clearInput(),
    ckeckInputLength()
})
