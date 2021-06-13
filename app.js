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

function maxLengthCheck() {
  if (input.value.length > input.maxLength)
    input.value = input.value.slice(0, input.maxLength)
}

function clear() {
  input.value = '0'
}

function addPlus() {
  input.value += '+'
}

function addMinus() {
  input.value += '-'
}

function addResult() {
  let exp = input.value
  if (exp) {
    input.value = eval(exp)
  }
}

function addMultiplication() {
  input.value += '*'
}

function addDivision() {
  input.value += '/'
}

function addOne() {
  if (input.value === '0') {
    input.value = '1'
  } else if (input.value) {
    input.value += '1'
  } else if (input.value === '') {
    input.value = '1'
  }
}

function addTwo() {
  if (input.value === '0') {
    input.value = '2'
  } else if (input.value) {
    input.value += '2'
  } else if (input.value === '') {
    input.value = '2'
  }
}

function addThree() {
  if (input.value === '0') {
    input.value = '3'
  } else if (input.value) {
    input.value += '3'
  } else if (input.value === '') {
    input.value = '3'
  }
}

function addFour() {
  if (input.value === '0') {
    input.value = '4'
  } else if (input.value) {
    input.value += '4'
  } else if (input.value === '') {
    input.value = '4'
  }
}

function addFive() {
  if (input.value === '0') {
    input.value = '5'
  } else if (input.value) {
    input.value += '5'
  } else if (input.value === '') {
    input.value = '5'
  }
}

function addSix() {
  if (input.value === '0') {
    input.value = '6'
  } else if (input.value) {
    input.value += '6'
  } else if (input.value === '') {
    input.value = '6'
  }
}

function addSeven() {
  if (input.value === '0') {
    input.value = '7'
  } else if (input.value) {
    input.value += '7'
  } else if (input.value === '') {
    input.value = '7'
  }
}

function addEight() {
  if (input.value === '0') {
    input.value = '8'
  } else if (input.value) {
    input.value += '8'
  } else if (input.value === '') {
    input.value = '8'
  }
}

function addNine() {
  if (input.value === '0') {
    input.value = '9'
  } else if (input.value) {
    input.value += '9'
  } else if (input.value === '') {
    input.value = '9'
  }
}

function addZero() {
  if (input.value === '0') {
    input.value = '0'
  } else if (input.value) {
    input.value += '0'
  } else if (input.value === '') {
    input.value = '0'
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
