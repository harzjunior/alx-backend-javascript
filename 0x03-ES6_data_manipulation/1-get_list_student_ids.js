/**
 * Retrieves ids from a list of stds.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of stds.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
