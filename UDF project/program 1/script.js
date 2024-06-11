function add(x, y) {
    return x + y;
  }
  
  function sub(x, y) {
    return x - y;
  }
  
  function mul(x, y) {
    return x * y;
  }
  
  function div(x, y) {
    if (y === 0) {
      return "Error: Division by zero";
    }
    return x / y;
  }
  
  function calculator() {
    let num1 = parseFloat(prompt("Enter the first number"));
    let operator = prompt("Enter the operator (+, -, *, /)");
    let num2 = parseFloat(prompt("Enter the second number"));
  
    let result;
  
    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = sub(num1, num2);
        break;
      case "*":
        result = mul(num1, num2);
        break;
      case "/":
        result = div(num1, num2);
        break;
      default:
        result = "Error: Invalid operator";
    }
  
    alert(`The result is: ${result}`);
  }
  
  calculator();