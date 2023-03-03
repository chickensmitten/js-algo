// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true
  } else {
    return false
  }
}
// The reverse() method reverses an array in place and returns the reference to the same array, 
// the first array element now becoming the last, 
// and the last array element becoming the first. 
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

module.exports = palindrome;
