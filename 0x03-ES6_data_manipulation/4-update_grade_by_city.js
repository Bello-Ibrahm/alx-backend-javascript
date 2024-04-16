/**
 * Updates the grades of students in a specific city based on a new list of grades.
 *
 * This function filters a list of students to include only those who are in the
 * specified city.
 * Then, it maps the filtered list of students and updates their grades based on
 * the provided `newGrades` array.
 * If a student has a matching grade entry in the `newGrades`
 * array (based on the student's ID), the student's grade is updated to the new grade.
 * If no matching grade entry is found, the student's grade is set to 'N/A'.
 *
 * @param {Array} students - An array of student objects.
 * Each student object should have an `id` property (a numeric value),
 * a `location` property (a string), and other properties as needed.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - An array of grade objects.
 * Each grade object should have a `studentId` property (a numeric value) and
 * a `grade` property (a string or numeric value).
 *
 * @returns {Array} - An array of student objects filtered by the specified city and
 * with updated grades.
 * If `students` or `newGrades` are not arrays, the function returns an empty array.
 */
/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) || Array.isArray(newGrades)) {
    const cityStudents = students.filter((student) => student.location === city).map((student) => {
      const item2 = newGrades.find((student2) => student.id === student2.studentId);
      return { ...student, grade: item2 ? item2.grade : 'N/A' };
    });
    return cityStudents;
  }
  return [];
}
