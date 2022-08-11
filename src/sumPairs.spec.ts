import sumPairs, {
  NumberList,
  ExpectedResult,
  SumPairsResult,
  sliceAt
} from "./index";

const testCases: [NumberList, ExpectedResult, SumPairsResult][] = [
  [[3, 5, 7, 2], 10, [3, 7]],
  [[-3, -2, 7, -5], 10, null],
  [[2, 2, 3, 1], 4, [2, 2]],
  [[6, 7, 1, 2], 8, [6, 2]],
  [[0, 2, 2, 3, -1, 1, 5], 6, [1, 5]]
];

describe("sumPairs", () => {
  testCases.forEach((testCase) => {
    const [numbers, expectedResult, output] = testCase;

    it(`returns correct result for numbers: ${numbers} and expectedResult: ${expectedResult}`, () => {
      expect(sumPairs(numbers, expectedResult)).toEqual(output);
    });
  });
});

describe("sliceAt", () => {
  it("returns an array that does not contain the passed value", () => {
    expect(sliceAt([3, 5, 4, 7, 10], 5)).toEqual([3, 4, 7, 10]);
    expect(sliceAt([4, 7, 3, 10], 4)).toEqual([7, 3, 10]);
  });
});
