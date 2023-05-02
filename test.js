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

describe("when it receives NaN and NaN", () => {
  test("then it should return false", () => {
    const valueA = NaN;
    const valueB = NaN;
    const expectedResult = false;

    const result = strictEquals(valueA, valueB);
    expect(result).toBe(expectedResult);
  });
});

describe("when it recieves -0 and 0", () => {
  test("then it should return true", () => {
    const valueA = -0;
    const valueB = 0;
    const expectedResult = true;

    const result = strictEquals(valueA, valueB);
    expect(result).toBe(expectedResult);
  });
});

describe("When it recieves false and false", () => {
  test("then it should return true", () => {
    const valueA = false;
    const valueB = false;
    const expectedResult = true;

    const result = strictEquals(valueA, valueB);
    expect(result).toBe(expectedResult);
  });
});

//preguntar que no anda.
