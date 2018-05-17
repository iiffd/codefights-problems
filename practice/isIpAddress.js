function isIPv4Address(inputString) {
  let bool = true;
  let dot = 0
  const nums = [];
  inputString.split('.').map((int) => {
      if (int !== '') {
          if (!isNaN(Number(int))) nums.push(Number(int));
      }
      dot += 1;
  });
  nums.map((int) => {
      if (int > 255) bool = false;
  })
  console.log(nums);
  return bool && nums.length === 4 && dot === 4;
}
