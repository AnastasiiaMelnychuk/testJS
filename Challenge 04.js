function iter_Arr(arr) {
  sum = 0;
  for (let n in arr) {
    sum += arr[n];
   }
  return sum;
}
iter_Arr([-5, 2, 5, 12]);
