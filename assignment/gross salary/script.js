let basicSalary = 10000;

let houseRentAllowance = 0.05 * basicSalary;
let travelAllowance = 0.08 * basicSalary;
let medicalAllowance = 0.07 * basicSalary;


let totalAllowance = houseRentAllowance + travelAllowance + medicalAllowance;


let grossSalary = basicSalary + totalAllowance - 200;

console.log("Gross salary is: " + grossSalary);