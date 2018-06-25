function merge(arr, l, m, r) {
  const firstPart = arr.slice(l, m + 1);
  const secondPart = arr.slice(m + 1, r + 1);
  let k = l;
  let i = 0;
  let j = 0;
  while (i < firstPart.length && j < secondPart.length) {
    if (firstPart[i] <= secondPart[j]) {
      arr[k] = firstPart[i];
      i += 1;
    } else {
      arr[k] = secondPart[j];
      j++;
    }
    k++;
  }

  while (i < firstPart.length) {
    arr[k] = firstPart[i];
    i += 1;
    k += 1;
  }

  while (j < secondPart.length) {
    arr[k] = secondPart[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l = 0, r = arr.length - 1) {
  if (r > l) {
    let middle = parseInt((l + r) / 2);
    mergeSort(arr, l, middle);
    mergeSort(arr, middle + 1, r);
    merge(arr, l, middle, r);
  }
}

module.exports = arr => {
  let arrCopy = [...arr];
  mergeSort(arrCopy);
  return arrCopy;
};
