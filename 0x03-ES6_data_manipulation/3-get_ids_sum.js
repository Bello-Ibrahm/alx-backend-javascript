/**
 * Calculates the sum of the id properties from an array of objects (arrList)
 * (acc, value) => acc + value.id, 0:
 *  acc is initialized with 0 + current value in the iteration.
 *
 * @returns {Number} - the final sum of the id properties (accumulator).
 */
const getStudentIdsSum = (arrList) => {
  const idsSum = arrList.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return idsSum;
};

export default getStudentIdsSum;
