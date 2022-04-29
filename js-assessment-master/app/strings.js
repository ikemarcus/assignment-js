exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  /**
   * Find the index where the substring appeared
   * @param {String} quote
   * @param {String} substring
   */
  index: (quote, substring) => {
    return quote(quote,"I do not like green eggs and ham. I do not like them, Sam-I-Am." + substring(substring,"green eggs and ham"));
  },

  /**
   * Check if the quote contains the substring
   * @param {String} quote
   * @param {String} substring
   */
  contains: (quote, substring) => {},

  /**
   * To capitalize the first character of a string
   * @param {String} str
   */
  capitalize: (str) => {},
};
