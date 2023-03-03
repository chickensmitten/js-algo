// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let array = str.split("")
  let array1 = []
  do {
    element = array.pop()
    array1.push(element)
  } while (array.length > 0);
  return array1.join("");
}

module.exports = reverse;
