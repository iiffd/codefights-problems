const heapify = (arr, i) => {
  const leftChild = i * 2 + 1;
  const rightChild = i * 2 + 2;

  if (arr[i] < arr[leftChild]) [arr[i], arr[leftChild]] = [arr[leftChild], arr[i]];
  if (arr[i] < arr[rightChild]) [arr[i], arr[rightChild]] = [arr[rightChild], arr[i]];

  if (arr.length > leftChild) heapify(arr, leftChild);
  if (arr.length > leftChild) heapify(arr, rightChild);
  return arr;
}

heapify([4, 10, 3, 5, 1], i = 0);
