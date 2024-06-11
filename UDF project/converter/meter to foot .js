function meterToFoot() {
    let meter = parseFloat(prompt("Enter the length in meters"));
  
    let foot = meter * 3.28084;
  
    alert(`The length in feet is: ${foot.toFixed(2)}`);
  }
  
  meterToFoot();