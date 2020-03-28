function maxMinAvg(arr) {
  var result = [];
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for (let v of arr) {
    if (v > max) max = v;
    if (v < min) min = v;
    sum += v;
  }
  result.push(max, min, sum / arr.length);
  return result;
}
maxMinAvg([1,5,10,-2]);
