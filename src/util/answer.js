
export const twoSum = function(nums, target) {
  if (typeof(target) !== 'number' && Array.isArray(target)) return;
  let n = nums.length;
  let rows = [];
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < n; i ++) {
      if (nums[i] + nums[j] === target) {
        rows.push(i, j);
        return rows;
      }
    }
  }
};

