const numbers = [1,2,3, 4,5, 6, 8, 10];


const hasOddNumber = numbers.findIndex(num => num % 2 !== 0) !== -1;
console.log(hasOddNumber ? 'Array contains an odd number' : 'All numbers are even');

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven ? 'All numbers are even' : 'Array contains an odd number');

const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber ? 'Array contains an even number' : 'No even numbers found');