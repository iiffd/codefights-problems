var twoSum = function(nums, target) {
  const remainder = {};
  for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] in remainder) return [i, remainder[nums[i]]];
      remainder[target - nums[i]] = i;
  }
};
