// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (i = 0; i < n; i++ ) {
    let pound_number = i + 1
    let space_number = n - pound_number
    let pound = "#".repeat(pound_number) + " ".repeat(space_number)
    console.log(pound)
  }
}

module.exports = steps;
