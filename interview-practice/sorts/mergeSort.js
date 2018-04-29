function sort(left, right) {
  let sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  if (right.length > 0) {
    sorted = sorted.concat(right);
  } else {
    sorted = sorted.concat(left);
  }
  return sorted;
}

function mergeSort(arr){
  //Your code here
  if (arr.length > 0) {
    if (arr.length === 1) {
      return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let l = arr.slice(0, middle);
    let r = arr.slice(middle, arr.length);

    let left = mergeSort(l);
    let right = mergeSort(r);
  
    return sort(left, right);
  }

}

mergeSort([1, 4, 3, 2]);
