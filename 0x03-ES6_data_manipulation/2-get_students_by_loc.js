/**
 * Filters an array of student objects by location.
 *
 * This function takes an array of student objects (`student`) and a city name (`city`),
 * and returns a new array containing only the students who are located in the specified city.
 * Each student object in the input array is expected to have a `location` property,
 * which is a string.
 *
 * @param {Array} student - An array of student objects.
 * Each student object is expected to have a `location` property, which is a string.
 *
 * @param {string} city - The name of the city to filter the students by.
 *
 * @returns {Array} - An array of student objects located in the specified city.
 * If no students are located in the specified city, an empty array is returned.
 */
export default function getStudentsByLocation(student, city) {
  return student.filter((item) => item.location === city);
}
