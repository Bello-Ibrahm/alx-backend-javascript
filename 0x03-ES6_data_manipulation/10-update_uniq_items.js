/**
 * Updates the map by setting values of 1 to 100.
 *
 * This function takes a `Map` as input and iterates over its entries.
 * If any value is equal to `1`, it updates the value to `100`.
 * The function throws an error if the input is not a `Map`.
 *
 * @param {Map} mapItem - The map to be updated.
 *
 * @throws {Error} - Throws an error if the input is not an instance of `Map`.
 */
export default function updateUniqueItems(mapItem) {
  if (mapItem instanceof Map) {
    mapItem.forEach((value, key) => {
      if (value === 1) {
        mapItem.set(key, 100);
      }
    });
    return;
  }
  throw new Error('Cannot process');
}
