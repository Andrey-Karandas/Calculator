const input = document.querySelector('.input')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const c = document.querySelector('.C')
const result = document.querySelector('.result')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const multiply = document.querySelector('.multiply')
const division = document.querySelector('.division')

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function clear() {
  input.value = '0'
}

function maxLengthCheck() {
  if (input.value.length > input.maxLength)
    input.value = input.value.slice(0, input.maxLength)
}

function addPlus() {}

function addMinus() {}

function addResult() {}

function addMultiplication() {}

function addDivision() {}

function addOne() {
  if (input.value === numbers[0]) {
    input.value = numbers[1]
  } else if (input.value) {
    input.value += numbers[1]
  } else if (input.value === '') {
    input.value = numbers[1]
  }
}

function addTwo() {
  if (input.value === numbers[0]) {
    input.value = numbers[2]
  } else if (input.value) {
    input.value += numbers[2]
  } else if (input.value === '') {
    input.value = numbers[2]
  }
}

function addThree() {
  if (input.value === numbers[0]) {
    input.value = numbers[3]
  } else if (input.value) {
    input.value += numbers[3]
  } else if (input.value === '') {
    input.value = numbers[3]
  }
}

function addFour() {
  if (input.value === numbers[0]) {
    input.value = numbers[4]
  } else if (input.value) {
    input.value += numbers[4]
  } else if (input.value === '') {
    input.value = numbers[4]
  }
}

function addFive() {
  if (input.value === numbers[0]) {
    input.value = numbers[5]
  } else if (input.value) {
    input.value += numbers[5]
  } else if (input.value === '') {
    input.value = numbers[5]
  }
}

function addSix() {
  if (input.value === numbers[0]) {
    input.value = numbers[6]
  } else if (input.value) {
    input.value += numbers[6]
  } else if (input.value === '') {
    input.value = numbers[6]
  }
}

function addSeven() {
  if (input.value === numbers[0]) {
    input.value = numbers[7]
  } else if (input.value) {
    input.value += numbers[7]
  } else if (input.value === '') {
    input.value = numbers[7]
  }
}

function addEight() {
  if (input.value === numbers[0]) {
    input.value = numbers[8]
  } else if (input.value) {
    input.value += numbers[8]
  } else if (input.value === '') {
    input.value = numbers[8]
  }
}

function addNine() {
  if (input.value === numbers[0]) {
    input.value = numbers[9]
  } else if (input.value) {
    input.value += numbers[9]
  } else if (input.value === '') {
    input.value = numbers[9]
  }
}

function addZero() {
  if (input.value === numbers[0]) {
    input.value = numbers[0]
  } else if (input.value) {
    input.value += numbers[0]
  } else if (input.value === '') {
    input.value = numbers[0]
  }
}
multiply.addEventListener('click', addMultiplication)
result.addEventListener('click', addResult)
plus.addEventListener('click', addPlus)
minus.addEventListener('click', addMinus)
division.addEventListener('click', addDivision)
c.addEventListener('click', clear)
one.addEventListener('click', maxLengthCheck)
one.addEventListener('click', addOne)
two.addEventListener('click', addTwo)
two.addEventListener('click', maxLengthCheck)
three.addEventListener('click', addThree)
three.addEventListener('click', maxLengthCheck)
four.addEventListener('click', addFour)
four.addEventListener('click', maxLengthCheck)
five.addEventListener('click', addFive)
five.addEventListener('click', maxLengthCheck)
six.addEventListener('click', addSix)
six.addEventListener('click', maxLengthCheck)
seven.addEventListener('click', addSeven)
seven.addEventListener('click', maxLengthCheck)
eight.addEventListener('click', addEight)
eight.addEventListener('click', maxLengthCheck)
nine.addEventListener('click', addNine)
nine.addEventListener('click', maxLengthCheck)
zero.addEventListener('click', addZero)
zero.addEventListener('click', maxLengthCheck)
input.addEventListener('input', maxLengthCheck)
