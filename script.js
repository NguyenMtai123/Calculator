let inputDisplay = document.querySelector('.input');
let outputDisplay = document.querySelector('.output');
let currentInput = '';
let result = 0;
let calculatorOn = false;

function turnOn() {
  calculatorOn = true;
  inputDisplay.textContent = '';
  outputDisplay.textContent = '';
  let buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    button.disabled = false;
  });
}

function turnOff() {
  calculatorOn = false;
  currentInput = '';
  inputDisplay.textContent = '';
  outputDisplay.textContent = '';
  let buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function appendNumber(number) {
  if (calculatorOn) {
    currentInput += number;
    inputDisplay.textContent = currentInput;
  }
}

function appendOperator(operator) {
  if (calculatorOn) {
    currentInput += ` ${operator} `;
    inputDisplay.textContent = currentInput;
  }
}

function clearDisplay() {
  if (calculatorOn) {
    currentInput = '';
    inputDisplay.textContent = '';
  }
}

function deleteLast() {
  if (calculatorOn) {
    currentInput = currentInput.slice(0, -1);
    inputDisplay.textContent = currentInput;
  }
}

function useAns() {
  if (calculatorOn) {
    currentInput += result;
    inputDisplay.textContent = currentInput;
  }
}

function calculate() {
  if (calculatorOn) {
    try {
      currentInput = currentInput.replace(/\b0+(\d+)/g, '$1');
      let result = eval(currentInput);
      outputDisplay.textContent = result;
      result = result;
    } catch (error) {
      outputDisplay.textContent = 'Error';
    }
  }
}
function appendBracket(bracket) {
  if (calculatorOn) {
    currentInput += bracket;
    inputDisplay.textContent = currentInput;
  }
}
function reset() {
  result = 0;
  useAns();
  outputDisplay.textContent = '';
  currentInput = '';
  inputDisplay.textContent = '';
}
document.querySelector('button[onclick="turnOn()"]').addEventListener('click', reset);
