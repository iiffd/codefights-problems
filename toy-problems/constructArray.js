function constructArray(size) {
  const arr = [];
  k = 0;
  l = 1;
  for (let i = 0; i < size; i += 1) {
      if (i % 2) {
          arr.push(size - k)
          k += 1;
      } else {
          arr.push(l);
          l += 1;
      }
  }
  return arr;
}
