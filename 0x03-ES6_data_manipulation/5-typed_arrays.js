/**
 * Creates a new Int8Array within an ArrayBuffer and sets a value at a specified position.
 *
 * The function creates a new ArrayBuffer with the specified length and initializes
 * an Int8Array within it. It sets the provided value at the specified position within
 * the Int8Array. The function then returns a DataView object representing the ArrayBuffer.
 *
 * @param {number} length - The length of the ArrayBuffer and Int8Array to be created.
 * The length must be a non-negative integer.
 *
 * @param {number} position - The position within the Int8Array where the value will be set.
 * The position must be a non-negative integer within the range [0, length).
 * If the position is out of range, an Error is thrown.
 *
 * @param {number} value - The value to be set at the specified position
 * within the Int8Array.
 * The value should be a number that fits within an Int8Array.
 *
 * @returns {DataView} - A DataView object representing the ArrayBuffer.
 * This allows you to view and manipulate the ArrayBuffer data.
 *
 * @throws {Error} - If the specified position is out of
 * range (less than 0 or greater than or equal to length),
 * an Error with the message 'Position outside range' is thrown.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(newBuffer, 0, length);
  int8.set([value], position);
  return new DataView(newBuffer);
}
