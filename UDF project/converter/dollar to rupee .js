function dollarToRupee() {
    let dollar = parseFloat(prompt("Enter the amount in Dollars"));
  
    let rupee = dollar *83.50;
  
    alert(`The amount in Rupees is: ${rupee.toFixed(2)}`);
  }
  
  dollarToRupee();