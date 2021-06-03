var canEat = function (candiesCount, queries) {
  const n = candiesCount.length;

  // 前缀和
  const sum = new Array(n).fill(0);
  sum[0] = candiesCount[0];
  for (let i = 1; i < n; ++i) {
    sum[i] = sum[i - 1] + candiesCount[i];
  }

  const q = queries.length;
  const ans = new Array(q).fill(0);
  for (let i = 0; i < q; ++i) {
    const query = queries[i];
    const favoriteType = query[0],
      favoriteDay = query[1],
      dailyCap = query[2];

    const x1 = favoriteDay + 1;
    const y1 = (favoriteDay + 1) * dailyCap;
    const x2 = favoriteType == 0 ? 1 : sum[favoriteType - 1] + 1;
    const y2 = sum[favoriteType];

    ans[i] = !(x1 > y2 || y1 < x2);
  }
  return ans;
};

let candiesCount = [7, 4, 5, 3, 8],
  queries = [
    [0, 2, 2],
    [4, 2, 4],
    [2, 13, 1000000000],
  ];

console.log('canEat :>> ', canEat(candiesCount, queries));

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solution/ni-neng-zai-ni-zui-xi-huan-de-na-tian-ch-boa0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
