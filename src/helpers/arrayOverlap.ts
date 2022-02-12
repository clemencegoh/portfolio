import { Set } from "immutable";

export function overlaps(array1: any[], array2: any[]): boolean {
  const set2 = Set(array2);
  for (const thing of array1) {
    if (set2.has(thing)) {
      return true;
    }
  }
  return false;
}

/**
 * Find if array 1 contains all elements in array 2
 * @param array1 item to be filtered usually
 * @param array2 filters
 */
export function containsAll(array1: any[], array2: any[]): boolean {
  const set1 = Set(array1);
  for (const thing of array2) {
    if (!set1.has(thing)) {
      return false;
    }
  }
  return true;
}
