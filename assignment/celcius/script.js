
function cToF(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  let celsius = 20;
  let fahrenheit = cToF(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);