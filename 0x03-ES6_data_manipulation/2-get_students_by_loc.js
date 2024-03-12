/**
 * gets std in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of stds.
 * @param {String} city - The location.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
