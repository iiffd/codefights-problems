function insertionSort (array) {
  for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
          if (array[i].value < array[j].value) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
              console.log(i, j, array[i], array[j]);
          }
      }
  }
  return array;
}

insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 2 }, { "value": 5, "order": 2 }, { "value": 1 } ]);