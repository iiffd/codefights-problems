s = "100[codefights]"

function decodeString(s) {
  function recurse(s, k = 0) {
    let mult = '';
    let string = '';

    for (let i = k; i < s.length; i += 1) {
      if (Number(s[i]) || s[i] === '0') {
        mult += s[i];
      } else if (s[i] === '[') {
        let result = recurse(s, i + 1);
        if (mult === '') mult = '1';
        string += result[0].repeat(Number(mult));
        mult = '';
        i += (result[1] - i - 1);
      } else if (s[i] === ']') {
        return [string, i + 1];
      } else {
        string += s[i];
      }
    }
    return [string, s.length];
  }

  return recurse(s)[0];
}

decodeString(s);
