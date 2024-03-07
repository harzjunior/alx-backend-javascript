/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - course name.
   * @param {Number} length - Duration of the course (in months).
   * @param {String[]} students - Names of students enrolled in the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the duration of the course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the duration of the course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students enrolled in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students enrolled in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
