document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input')
  const buttons = document.querySelectorAll('.button')
  const maxLength = +input.getAttribute('maxlength')

  function getResult() {
    let numbers = input.value.split(/[-+*/]/)
    let operators = []
    for (let i = 0; i < input.value.length; i++) {
      if (
        input.value[i] === '+' ||
        input.value[i] === '-' ||
        input.value[i] === '*' ||
        input.value[i] === '/'
      )
        operators.push(input.value[i])
    }

    let result = parseInt(numbers[0])
    for (let i = 1; i < numbers.length; i++) {
      if (operators[i - 1] === '+') {
        result += parseInt(numbers[i])
      } else if (operators[i - 1] === '-') {
        result -= parseInt(numbers[i])
      } else if (operators[i - 1] === '*') {
        result *= parseInt(numbers[i])
      } else if (operators[i - 1] === '/') {
        result /= parseInt(numbers[i])
      }
    }
    input.value = result
  }

  const clearInput = () => (input.value = '')

  document.addEventListener('click', (event) => {
    if (event.target.closest('.button')) input.value += event.target.textContent
    if (input.value.length === maxLength) {
      buttons.forEach((button) => (button.className = 'stop'))
    } else {
      buttons.forEach((button) => (button.className = 'button'))
    }
  })

  document.querySelector('.clear').addEventListener('click', clearInput)
  document.querySelector('.operator').addEventListener('click', getResult)
})
