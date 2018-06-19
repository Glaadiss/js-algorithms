const knapsack = require("./knapsack");
const weights = [
  { S: 3, W: 5 },
  { S: 2, W: 4 },
  { S: 5, W: 3 },
  { S: 1, W: 2 },
  { S: 5, W: 1 }
];

describe("knapsack algortihm return sum for given array and weight", () => {
  test("return 10 for weight: 5", () => {
    expect(knapsack(weights, 5)).toBe(10);
  });

  test("return 11 for weight: 6", () => {
    expect(knapsack(weights, 6)).toBe(11);
  });

  test("return 5 for weight: 1", () => {
    expect(knapsack(weights, 1)).toBe(5);
  });
});
