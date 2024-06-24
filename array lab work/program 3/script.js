function doubleTripleArrayValues(arr) {
    let doubledValues = arr.map(num => num * 2);
    let tripledValues = arr.map(num => num * 3);
    return { doubledValues, tripledValues };
}
let array = [1, 2, 3, 4, 5];

let { doubledValues, tripledValues } = doubleTripleArrayValues(array);
console.log("Doubled values:", doubledValues);
console.log("Tripled values:", tripledValues);