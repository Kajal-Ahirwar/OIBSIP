document.getElementById("convertBtn").addEventListener("click", () => {
  const tempInput = document.getElementById("tempValue").value;
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  // Validate numeric input
  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.textContent = "❌ Please enter a valid numeric value.";
    return;
  }

  let temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin;

  // Conversion logic
  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  // Absolute zero check
  if (celsius < -273.15) {
    resultDiv.textContent = "⚠️ Invalid input: below absolute zero!";
    return;
  }

  // Display results
  resultDiv.innerHTML = `
    ✅ Converted Values:<br>
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
});
