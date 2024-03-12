/**
 * Checks if a set holds each element in an arr.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The arr of items.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
