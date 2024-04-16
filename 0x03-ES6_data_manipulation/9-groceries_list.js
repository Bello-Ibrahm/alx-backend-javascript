/**
 * Creates and returns a Map of grocery items and their quantities.
 *
 * This function initializes an array of grocery items, where each item
 * is represented as a pair of values:
 * the first value is the name of the item (a string), and the second value
 * is the quantity of the item (a number).
 * The function then creates a Map using the array, with each grocery item
 * as a key-value pair in the Map.
 *
 * @returns {Map} - A Map containing grocery items as keys and their quantities as values.
 * Each key is a string representing the name of the grocery item, and each value
 * is a number representing the quantity of the item.
 */
export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(items);
}
