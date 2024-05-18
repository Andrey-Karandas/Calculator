document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input')
  const buttons = document.querySelectorAll('.button')
  const maxLength = +input.getAttribute('maxlength')

  function getOperators() {
    const operators = []
    for (let i = 0; i < input.value.length; i++) {
      if (
        input.value[i] === '+' ||
        input.value[i] === '-' ||
        input.value[i] === '*' ||
        input.value[i] === '/'
      )
        operators.push(input.value[i])
    }
    return operators
  }

  function getResult() {
    let numbers = input.value.split(/[-+*/]/)
    const operators = getOperators()
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

  const setClass = (name) =>
    buttons.forEach((button) => (button.className = name))

  document.addEventListener('click', (event) => {
    if (event.target.closest('.button')) input.value += event.target.textContent
    input.value.length === maxLength ? setClass('stop') : setClass('button')
  })

  document.querySelector('.clear').addEventListener('click', clearInput)
  document.querySelector('.operator').addEventListener('click', getResult)
})
