/**
 * Cleans a set of strings by removing a specified starting string from each item
 * and returns a hyphen-separated string.
 *
 * This function iterates over a set of strings and checks each item
 * to see if it starts with the specified starting string.
 * If it does, the function removes the starting string from the item
 * and adds the remaining part to an array.
 * Finally, it returns a string of the cleaned items joined by a hyphen.
 *
 * @param {Set} set - A set of strings.
 * @param {string} startString - A string that the items in the set may start with.
 *
 * @returns {string} - A hyphen-separated string of cleaned items from the set.
 * Returns an empty string if the starting string is empty or not a valid string.
 */
export default function cleanSet(set, startString) {
  const strContainer = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      strContainer.push(item.slice(startString.length));
    }
  });
  return strContainer.join('-');
}
