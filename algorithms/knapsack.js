function knapSack(arr, W) {
  const memo = {};
  function kap(arr, W = 0, S = 0) {
    if (memo[arr.length] !== undefined) return memo[arr.length];

    if (W === 0 || arr.length === 0) return S;

    const arrPart = arr.slice(0, -1);
    const curr = arr[arr.length - 1];

    if (W < curr.W) return kap(arrPart, W, S);

    const takeItem = kap(arrPart, W - curr.W, S + curr.S);
    const omitItem = kap(arrPart, W, S);
    const result = takeItem > omitItem ? takeItem : omitItem;
    memo[arr.length] = result;
    return result;
  }
  return kap(arr, W, 0);
}

module.exports = knapSack;
