function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Enter the temperature in Celsius"));
  
    let fahrenheit = (celsius * 9/5) + 32;
  
    alert(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);
  }
  
  celsiusToFahrenheit();