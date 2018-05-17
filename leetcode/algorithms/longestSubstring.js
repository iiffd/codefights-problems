var lengthOfLongestSubstring = function(s) {
  let longestSub = 0;
  let seen = new Set();
  
  for (let i = 0; i < s.length; i += 1) {
      let sub = 0;
      for (let j = i; j < s.length; j += 1) {
          if (seen.has(s[j])) break;
          sub += 1;
          seen.add(s[j]);
      }
      if (sub > longestSub) longestSub = sub;
      seen = new Set();
  }
  return longestSub;
};
