exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  /**
   * Determine the location of an item in an array
   * @param {Array} arr
   * @param {Number} item
   */
  indexOf: (arr, item) => {
    return arr.indexOf(item)
  },

  /**
   * Remove all instances of a value from an array
   * @param {Array} arr
   * @param {Number} item
   */
  remove: (arr, item) => {
   arr.splice(1, 1)
   return arr
  },

  /**
   * Add an item to the end of an array
   * @param {Array} arr
   * @param {Number} item
   */
  append: (arr, item) => {
    arr.push(item)
    return arr
  },

  /**
   * Remove the last item of an array
   * @param {Array} arr
   */
  truncate: (arr) => {
    arr.splice(-1,1)
    return arr
  },

  /**
   * Add an item to the beginning of an array
   * @param {Array} arr
   * @param {Number} item
   */
  prepend: (arr, item) => {
    arr.unshift(item)
    return arr
  },

  /**
   * Remove the first item of an array
   * @param {Array} arr
   */
  curtail: (arr) => {
    arr.shift(1, 1)
    return arr
  },

  /**
   * Join together two arrays
   * @param {Array} arr1
   * @param {Array} arr2
   */
  concat: (arr1, arr2) => {
   arr = arr1.concat(arr2)
   return arr
  },

  /**
   * Count the occurences of an item in an array
   * @param {Array} arr
   * @param {Number} item
   */
  count: (arr, item) => {
    return arr.reduce(item)
    
  },

  /**
   * BONUS: Find duplicates in an array
   * @param {Array} arr
   */
  duplicates: (arr) => {},
  /**
   * BONUS: Square each number in an array
   * @param {Array} arr
   */
  square: (arr) => {},
};
