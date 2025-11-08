
    const display = document.getElementById('display');
    let currentInput = '';

    function updateDisplay() {
      display.textContent = currentInput || '0';
    }

    function appendNumber(num) {
      currentInput += num;
      updateDisplay();
    }

    function appendOperator(op) {
      if (currentInput === '') return;
      const lastChar = currentInput.slice(-1);
      if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
      } else {
        currentInput += op;
      }
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      updateDisplay();
    }

    function deleteChar() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
      updateDisplay();
    }