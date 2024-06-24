let array = [10, 20, 30, 40, 45];
let element = array.find(element => element === 45);

if (element) {
    console.log("Element 45 found in the array.");
} else {
    console.log("Element 45 not found in the array.");
}