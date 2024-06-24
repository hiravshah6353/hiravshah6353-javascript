var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
var count = {};

pets.forEach(function(pet) {
    count[pet] = (count[pet] || 0) + 1;
});

console.log(count);