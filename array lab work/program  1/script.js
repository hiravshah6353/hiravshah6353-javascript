var a = [23, 33, 45, 43, 12];

var max = a.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max); 