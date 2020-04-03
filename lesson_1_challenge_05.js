function find_Max(arr) {
  var max = arr[0];
  for (let i in arr){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}      
find_Max([-3, 3, 5, 7]);
