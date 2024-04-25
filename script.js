let inputDisplay = document.querySelector('.input');
let outputDisplay = document.querySelector('.output');
let currentInput = '';
let previousResult = 0; // Lưu trữ kết quả trước đó
let calculatorOn = false; // Biến để kiểm tra trạng thái của máy tính

// Function để bật máy tính
function turnOn() {
  calculatorOn = true;
  inputDisplay.textContent = '';
  outputDisplay.textContent = '';
  // Cho phép các button trong class "buttons" tương tác
  let buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    button.disabled = false;
  });
}

// Function để tắt máy tính
function turnOff() {
  calculatorOn = false;
  currentInput = '';
  inputDisplay.textContent = '';
  outputDisplay.textContent = '';
  // Vô hiệu hóa các button trong class "buttons"
  let buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Function để thêm số vào biểu thức tính toán
function appendNumber(number) {
  if (calculatorOn) {
    currentInput += number;
    inputDisplay.textContent = currentInput;
  }
}

// Function để thêm toán tử vào biểu thức tính toán
function appendOperator(operator) {
  if (calculatorOn) {
    currentInput += ` ${operator} `;
    inputDisplay.textContent = currentInput;
  }
}

// Function để đặt lại màn hình hiển thị
function clearDisplay() {
  if (calculatorOn) {
    currentInput = '';
    inputDisplay.textContent = '0';
  }
}

// Function để xóa ký tự cuối cùng trong biểu thức tính toán
function deleteLast() {
  if (calculatorOn) {
    currentInput = currentInput.slice(0, -1);
    inputDisplay.textContent = currentInput;
  }
}

// Function để sử dụng kết quả trước đó (ANS)
function useAns() {
  if (calculatorOn) {
    currentInput += previousResult; // Sử dụng kết quả trước đó
    inputDisplay.textContent = currentInput;
  }
}

// Function để tính toán biểu thức
function calculate() {
  if (calculatorOn) {
    try {
      let result = eval(currentInput);
      outputDisplay.textContent = result;
      previousResult = result; // Cập nhật kết quả trước đó
    } catch (error) {
      outputDisplay.textContent = 'Error';
    }
  }
}

// Function để thêm dấu ngoặc vào biểu thức tính toán
function appendBracket(bracket) {
  if (calculatorOn) {
    currentInput += bracket;
    inputDisplay.textContent = currentInput;
  }
}
function reset() {
  previousResult = 0; // Đặt lại kết quả trước đó
  useAns(); // Đặt lại hiển thị input bằng 0
  // inputDisplay.textContent = '';
  outputDisplay.textContent = '';
  currentInput = '';
  inputDisplay.textContent = '';
}

// Gán hàm reset cho sự kiện khi click nút ON
document.querySelector('button[onclick="turnOn()"]').addEventListener('click', reset);
