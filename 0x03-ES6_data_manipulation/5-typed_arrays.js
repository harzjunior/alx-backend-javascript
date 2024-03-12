/**
 * Creates a buffer arr with a given position set to a given val.
 * @param {Number} length - The len of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The val to be stored in the position.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
