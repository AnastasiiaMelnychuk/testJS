function find_Max(arr) {
  sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum / arr.length;
}
find_Max([1, 3, 5, 7, 20]);
