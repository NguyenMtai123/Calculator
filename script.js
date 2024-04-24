let inputDisplay = document.querySelector('.input');
let outputDisplay = document.querySelector('.output');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  inputDisplay.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  inputDisplay.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  inputDisplay.textContent = '0';
  outputDisplay.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1); // Xóa ký tự cuối cùng
  inputDisplay.textContent = currentInput;
}

function useAns() {
  currentInput += outputDisplay.textContent; // Sử dụng kết quả trước đó
  inputDisplay.textContent = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    outputDisplay.textContent = result;
  } catch (error) {
    outputDisplay.textContent = 'Error';
  }
}
function appendBracket(bracket) {
  currentInput += bracket;
  inputDisplay.textContent = currentInput;
}
