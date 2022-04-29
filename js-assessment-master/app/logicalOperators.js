exports = typeof window === "undefined" ? global : window;

exports.logicalOperatorsAnswers = {
  /**
   * Work with logical or
   * @param {*} a
   * @param {*} b
   */
  or: (a, b) => {
    return or(a || b,)
  },

  /**
   * Work with logical and
   * @param {*} a
   * @param {*} b
   */
  and: (a, b) => {
    return and(a && b)
  },
};
