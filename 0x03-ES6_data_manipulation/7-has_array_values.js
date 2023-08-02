export default function hasValuesFromArray(setVal, arrayVal) {
  return arrayVal.every((element) => setVal.has(element));
}

// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
