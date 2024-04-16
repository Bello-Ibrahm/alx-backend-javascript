/**
 * Calculates the sum of student IDs from an array of objects.
 *
 * The function uses the `reduce` method to iterate through an array of objects (`arrList`) and
 * calculates the sum of the `id` properties.
 * The initial value of the accumulator is set to 0.
 * Each object in the array is expected to have an `id` property, which is a numeric value.
 *
 * @param {Array} arrList - An array of objects representing students.
 * Each object in the array is expected to have an `id` property, which is a numeric value.
 *
 * @returns {number} - The sum of the `id` properties from the array of objects.
 * Returns 0 if the array is empty or if none of the objects have an `id` property.
 */
const getStudentIdsSum = (arrList) => {
  const idsSum = arrList.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return idsSum;
};

export default getStudentIdsSum;
