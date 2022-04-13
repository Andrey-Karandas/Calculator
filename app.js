const input = document.querySelector('.input')
const buttonOne = document.querySelector('.one')
const buttonTwo = document.querySelector('.two')
const buttonThree = document.querySelector('.three')
const buttonFour = document.querySelector('.four')
const buttonFive = document.querySelector('.five')
const buttonSix = document.querySelector('.six')
const buttonSeven = document.querySelector('.seven')
const buttonEight = document.querySelector('.eight')
const buttonNine = document.querySelector('.nine')
const buttonZero = document.querySelector('.zero')
const buttonClear = document.querySelector('.c')
const buttonResult = document.querySelector('.result')
const buttonMinus = document.querySelector('.minus')
const buttonPlus = document.querySelector('.plus')
const buttonMultiply = document.querySelector('.multiply')
const buttonDivision = document.querySelector('.division')

let oneValue
let twoValue
let operator

// addOperator
let addPlus = () => (operator = '+')

let addMinus = () => (operator = '-')

let addMultiply = () => (operator = '*')

let addDivision = () => (operator = '/')

// clear
let clearInput = () => (input.value = '')

// getValue
function getOneValue() {
  return (oneValue = +input.value)
}

function getTwoValue() {
  return (twoValue = +input.value)
}

// calc
function calcSum() {
  return (input.value = oneValue + twoValue)
}

function calcDifference() {
  return (input.value = oneValue - twoValue)
}

function calcProduct() {
  return (input.value = oneValue * twoValue)
}

function calcDivisor() {
  return (input.value = oneValue / twoValue)
}

// checkOperator
function checkOperatorPlus() {
  if (operator == '+') calcSum()
}

function checkOperatorMinus() {
  if (operator == '-') calcDifference()
}

function checkOperatorMultiply() {
  if (operator == '*') calcProduct()
}

function checkOperatorDivision() {
  if (operator == '/') calcDivisor()
}

// addNumber

function addOne() {
  return (input.value += 1)
}

function addTwo() {
  return (input.value += 2)
}

function addThree() {
  return (input.value += 3)
}

function addFour() {
  return (input.value += 4)
}

function addFive() {
  return (input.value += 5)
}

function addSix() {
  return (input.value += 6)
}

function addSeven() {
  return (input.value += 7)
}

function addEight() {
  return (input.value += 8)
}

function addNine() {
  return (input.value += 9)
}

function addZero() {
  return (input.value += 0)
}

// Event
buttonResult.addEventListener('click', getTwoValue)
buttonResult.addEventListener('click', checkOperatorPlus)
buttonResult.addEventListener('click', checkOperatorMinus)
buttonResult.addEventListener('click', checkOperatorMultiply)
buttonResult.addEventListener('click', checkOperatorDivision)

buttonPlus.addEventListener('click', addPlus)
buttonPlus.addEventListener('click', getOneValue)
buttonPlus.addEventListener('click', clearInput)

buttonMinus.addEventListener('click', addMinus)
buttonMinus.addEventListener('click', getOneValue)
buttonMinus.addEventListener('click', clearInput)

buttonMultiply.addEventListener('click', addMultiply)
buttonMultiply.addEventListener('click', getOneValue)
buttonMultiply.addEventListener('click', clearInput)

buttonDivision.addEventListener('click', addDivision)
buttonDivision.addEventListener('click', getOneValue)
buttonDivision.addEventListener('click', clearInput)

buttonClear.addEventListener('click', clearInput)
buttonOne.addEventListener('click', addOne)
buttonTwo.addEventListener('click', addTwo)
buttonThree.addEventListener('click', addThree)
buttonFour.addEventListener('click', addFour)
buttonFive.addEventListener('click', addFive)
buttonSix.addEventListener('click', addSix)
buttonSeven.addEventListener('click', addSeven)
buttonEight.addEventListener('click', addEight)
buttonNine.addEventListener('click', addNine)
buttonZero.addEventListener('click', addZero)
