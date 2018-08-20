/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  let sum = 0;
  arr.forEach((item) => {
    if (typeof item === 'number'){
      sum += item;
    } else if (!isFinite(item)) {
      // skip infinity
    } else if (isNaN(item)) {
      // skip NaN
    } else if (typeof item === 'string') {
      sum += parseFloat(item);
    }
  })
  return sum;
};

export default sumElements;
