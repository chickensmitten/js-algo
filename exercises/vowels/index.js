// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  const array = str.toLowerCase().split("")
  let vowels_count = 0
  for (let i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) {
      vowels_count++
    }
  }
  return vowels_count
}

module.exports = vowels;
