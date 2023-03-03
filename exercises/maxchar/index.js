// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const string_object = {};

  let max = 0;
  let maxChar = "";
  for (let element of str) {
    if (!string_object[element]) {
      string_object[element] = 1;
    } else {
      string_object[element] ++;
    }
  }

  for (let element in string_object) {
    if (string_object[element] > max) {
      max = string_object[element];
      maxChar = element;
    }
  }

  return maxChar;
}

module.exports = maxChar;
