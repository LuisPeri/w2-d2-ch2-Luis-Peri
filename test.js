const strictEquals = require("./index");

describe("given a comparing fucntion", () => {
  describe("when it receives 2 and 2", () => {
    test("then it should return true", () => {
      const valueA = 2;
      const valueB = 2;
      const expectedResult = true;

      const result = strictEquals(valueA, valueB);
      expect(result).toBe(expectedResult);
    });
  });
});
