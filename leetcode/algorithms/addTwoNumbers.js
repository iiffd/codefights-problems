const generateNumber = (l) => {
  let num = 0;
  let place = 1;
  
  while (l) {
      num += (l.val * place);
      place *= 10;
      l = l.next;
  }
  return num;
}

const addTwoNumbers = (l1, l2) => {
  const num1 = generateNumber(l1);
  const num2 = generateNumber(l2);
  const total = (num1 + num2).toString();
  return total.split('').reverse().map((digit) => Number(digit));
};
