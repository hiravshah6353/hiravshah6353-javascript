function rectangleArea(length, width) {
    return length * width;
  }
  
  function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  function circleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  function calculateArea() {
    let shape = prompt("Enter the shape (rectangle, triangle, circle)");
    let area;
  
    switch (shape) {
      case "rectangle":
        let length = parseFloat(prompt("Enter the length"));
        let width = parseFloat(prompt("Enter the width"));
        area = rectangleArea(length, width);
        break;
      case "triangle":
        let base = parseFloat(prompt("Enter the base"));
        let height = parseFloat(prompt("Enter the height"));
        area = triangleArea(base, height);
        break;
      case "circle":
        let radius = parseFloat(prompt("Enter the radius"));
        area = circleArea(radius);
        break;
      default:
        area = "Error: Invalid shape";
    }
  
    alert(`The area is: ${area}`);
  }
  
  calculateArea();