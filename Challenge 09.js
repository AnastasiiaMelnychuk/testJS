function squareVal(arr) {
  var result = [];
  for (let n of arr) {
    result.push(Math.pow(n,2));
  }
  return result;
}
squareVal([1, 5, 10, -2]);

/*
function squareVal(arr) {
  return arr.map(n => Math.pow(n,2));
}
squareVal([1, 5, 10, -2]);
*/
