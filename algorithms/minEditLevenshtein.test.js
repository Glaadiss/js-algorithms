const minEdit = require("./minEditLevenshtein");

describe("minEdit Levenshtein's  algorithm", () => {
  test("should return expect value for two words", () => {
    expect(minEdit("foka", "kotka")).toEqual(2);
    expect(minEdit("bartek", "justyna")).toEqual(6);
    expect(minEdit("babcia", "prababcia")).toEqual(3);
    expect(minEdit("prababcia", "babcia")).toEqual(3);
  });
});
