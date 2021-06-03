var checkSubarraySum = function (nums, k) {
  const m = nums.length;
  if (m < 2) {
    return false;
  }
  const map = new Map();
  map.set(0, -1);
  let remainder = 0;
  for (let i = 0; i < m; i++) {
    remainder = (remainder + nums[i]) % k;
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder);
      if (i - prevIndex >= 2) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }
  return false;
};

let nums = [23, 2, 4, 6, 7],
  k = 6;

console.log(checkSubarraySum(nums, k));

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/continuous-subarray-sum/solution/lian-xu-de-zi-shu-zu-he-by-leetcode-solu-rdzi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
