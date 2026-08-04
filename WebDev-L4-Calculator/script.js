const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      currentInput = "";
      display.textContent = "0";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (action === "equals") {
      try {
        if (currentInput.includes("/0")) {
          display.textContent = "❌ Error: Division by zero";
          currentInput = "";
          return;
        }
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = "❌ Invalid Expression";
        currentInput = "";
      }
    } else {
      if (resultDisplayed && !isNaN(value)) {
        currentInput = "";
        resultDisplayed = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
