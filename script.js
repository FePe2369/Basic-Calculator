document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      const action = button.dataset.action;

      if (value) {
        appendToDisplay(value);
      } else if (action === "clear") {
        clearDisplay();
      } else if (action === "delete") {
        deleteLast();
      } else if (action === "calculate") {
        calculateResult();
      }
    });
  });

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") appendToDisplay(e.key);
    if (e.key === ".") appendToDisplay(".");
    if (["+", "-", "*", "/", "(", ")"].includes(e.key)) appendToDisplay(e.key);
    if (e.key === "Enter") calculateResult();
    if (e.key === "Escape") clearDisplay();
    if (e.key === "Backspace") deleteLast();
  });
});

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b,
  };

  const tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*{1,2}|\/|\(|\))/g);
  if (!tokens) throw new Error("Invalid Expression");

  const values = [];
  const ops = [];

  const applyOperator = () => {
    const b = values.pop();
    const a = values.pop();
    const op = ops.pop();
    values.push(operators[op](a, b));
  };

  for (const token of tokens) {
    if (!isNaN(token)) {
      values.push(parseFloat(token));
    } else if (token in operators) {
      while (
        ops.length &&
        precedence(ops[ops.length - 1]) >= precedence(token)
      ) {
        applyOperator();
      }
      ops.push(token);
    } else if (token === "(") {
      ops.push(token);
    } else if (token === ")") {
      while (ops[ops.length - 1] !== "(") {
        applyOperator();
      }
      ops.pop();
    }
  }

  while (ops.length) {
    applyOperator();
  }

  return values.pop();
}

function precedence(op) {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/" || op === "**") return 2;
  return 0;
}
