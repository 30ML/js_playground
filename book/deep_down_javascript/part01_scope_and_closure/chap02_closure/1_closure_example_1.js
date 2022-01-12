function outer() {
  var count = 0;
  var inner = function () {
    return ++count;
  };
  return inner;
}
var increase = outer();

console.log(increase()); // === 1
console.log(increase()); // === 2