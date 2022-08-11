export type NumberList = number[];
export type ExpectedResult = number;
export type SumPairsResult = [number, number] | null;

export function sliceAt(array: NumberList, item: number) {
  const indexOf = array.indexOf(item);

  return array.slice(0, indexOf).concat(array.slice(indexOf + 1, array.length));
}

export default function sumPairs(
  numbers: NumberList,
  result: ExpectedResult
): SumPairsResult {
  let matchingPair: SumPairsResult = null;
  let current = numbers[0];
  let itemsToCompareWith = sliceAt([...numbers], current);

  let iter = 0;
  while (iter <= numbers.length) {
    for (let num of itemsToCompareWith) {
      if (current + num === result) {
        matchingPair = [current, num];
        break;
      }
    }

    if (matchingPair?.length === 2) {
      break;
    }

    iter++;

    current = numbers[iter];
    itemsToCompareWith = sliceAt([...numbers], current);
  }

  return matchingPair;
}
