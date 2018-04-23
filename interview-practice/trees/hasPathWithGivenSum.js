function hasPathWithGivenSum(t, s) {
  let hasSum = false;
  
  function recurse(t, sum = 0) {
      if (!t) {
          if (sum === s) hasSum = true;
          return;
      }
      sum += t.value
      if (t.left) recurse(t.left, sum);
      if (t.right) recurse(t.right, sum);
      if (!t.left && !t.right && sum === s) hasSum = true;
  }
  recurse(t);
  return hasSum;
}
