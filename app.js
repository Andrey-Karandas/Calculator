const input = document.querySelector('.input')
const buttons = document.querySelectorAll('.button')
const maxLength = parseInt(input.getAttribute('maxlength'))
const btnClear = document.querySelector('.clear')
const btnEqual = document.querySelector('.button-equal')

btnClear.addEventListener('click', () => input.value = '')

function getOperators(input) {
  return input.value.split('').filter(x => {
    if ('+-*/'.includes(x)) {
      return x
    }
  })
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.button')) {
    input.value += event.target.textContent
  }

  if (input.value.length === maxLength) {
    buttons.forEach((button) => (button.className = "stop"))
  }
  else {
    buttons.forEach((button) => (button.className = "button"))
  }
})

btnEqual.addEventListener('click', () => {
  let numbers = input.value.split(/[-+*/]/)
  const operators = getOperators(input)
  let result = parseInt(numbers[0])

  for (let i = 1; i < numbers.length; i++) {

    let operator = operators[i - 1]
    let value = parseInt(numbers[i])

    switch (operator) {
      case '+': result += value; break;
      case '-': result -= value; break;
      case '*': result *= value; break;
      case '/': result /= value; break;
    }
  }

  input.value = result
})