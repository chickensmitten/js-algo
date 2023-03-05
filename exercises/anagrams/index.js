// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //  remove funny characters and lowercase them
  const regexA = stringA.replace(/[^\w]/g, "").toLowerCase()
  const regexB = stringB.replace(/[^\w]/g, "").toLowerCase()

  let charMapA = maxChar(regexA)
  let charMapB = maxChar(regexB)

  let longCharMap
  let shortCharMap

  if (Object.keys(charMapA).length >= Object.keys(charMapB).length) {
    longCharMap = charMapA 
    shortCharMap = charMapB
  } else {
    longCharMap = charMapB
    shortCharMap = charMapA
  }
  for (const char in longCharMap) {
    if (longCharMap[char] !== shortCharMap[char]) {
      return false
    }
  }
  return true
}

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

module.exports = anagrams;
