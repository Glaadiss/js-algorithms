function quickSort(A) {
  const arr = [...A];

  function swap(arr, i, j) {
    const buf = arr[i];
    arr[i] = arr[j];
    arr[j] = buf;
  }

  function partition(arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
      if (arr[j] < pivot) {
        i += 1;
        swap(arr, i, j);
      }
    }
    i += 1;
    swap(arr, i, hi);
    return i;
  }

  function quickSort(arr, lo = 0, hi = arr.length - 1) {
    if (lo < hi) {
      const p = partition(arr, lo, hi);
      quickSort(arr, lo, p - 1);
      quickSort(arr, p + 1, hi);
    }
  }

  quickSort(arr);

  return arr;
}

module.exports = quickSort;
