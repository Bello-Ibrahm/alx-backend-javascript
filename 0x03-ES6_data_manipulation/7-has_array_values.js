/**
 * Checks if all values from an array are present in a set.
 *
 * This function takes a `set` and an `array` as input parameters.
 * It uses the `every` method on the array to check if each value
 * in the array is present in the set using the `set.has` method.
 * If all values from the array are found in the set,
 * the function returns `true`; otherwise, it returns `false`.
 *
 * @param {Set} set - A Set containing values.
 * @param {Array} array - An array of values to check against the set.
 *
 * @returns {boolean} - Returns `true` if all values from the array are present
 * in the set; otherwise, returns `false`.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
