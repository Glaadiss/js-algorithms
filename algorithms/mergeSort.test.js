const mergeSort = require("./mergeSort");

const testArr = [1, 3, 5, 7, 9, 3, 2];
const expectedArr = [1, 2, 3, 3, 5, 7, 9];

describe("mergeSort algorithm", () => {
  test("Should return expectedArr for given testArr", () => {
    expect(mergeSort(testArr)).toEqual(expectedArr);
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
