function swap(arr) {
  var result = [];
  result.push(arr[arr.length - 1]);
  for (let i = 1; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }
  result.push(arr[0]);
  return result;
}
swap([1,5,10,-2]);
