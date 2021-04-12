/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let arr = array.length - 1;

  while (i <= arr) {
    const num = Math.floor((i + arr) / 2);
    if (array[num] < value) {
      i = num + 1;
    } else if (array[num] > value) {
      arr = num - 1;
    } else {
      return num;
    }
  }
  return -1;
}

module.exports = findIndex;
