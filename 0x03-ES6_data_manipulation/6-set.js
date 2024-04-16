/**
 * Converts an array to a set, removing any duplicate elements.
 *
 * The function takes an array as input and returns a
 * new Set instance containing the unique elements from the array.
 * Using a Set allows for removing any duplicate elements,
 * as a Set can only contain unique values.
 *
 * @param {Array} arr - The input array to convert to a Set.
 *
 * @returns {Set} - A new Set containing the unique elements from the input array.
 */
const setFromArray = (arr) => new Set(arr);

export default setFromArray;
