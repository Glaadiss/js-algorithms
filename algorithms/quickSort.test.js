const quickSort = require("./quickSort");

const testArr = [1, 3, 5, 7, 9, 3, 2];
const expectedArr = [1, 2, 3, 3, 5, 7, 9];

describe("quickSort algorithm", () => {
  test("Should return expectedArr for given testArr", () => {
    expect(quickSort(testArr)).toEqual(expectedArr);
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
