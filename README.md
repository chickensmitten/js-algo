# JS Algo
Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

## Run test
- `npx jest` to run test for all the folders
- `npx jest fib/test.js --watch` to have the test `fib` folder running in the background
- debugging
  - put `debugger;` in code 
  - then run `node inspect <filename>.js`
  - press `c` until you hit the code with `debugger;`, then test the code
  - to inspect a variable, we have to enter REPL mode by running `repl`
  - to exit use ctrl + c

## Interesting methods

**Reverse String**
- `reduce()` see code below. It is an accumulator
```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```
- `reverse()` is a helper method to reverse a string.

**Palindrome**
- `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

**Reverse Integer**
- Use `Math.sign(n)` to get whether `n` is a positive or negative. Then multiply with an integer to convert the integer into a positive or negative. It is similar to `number * -1` to make `number` a negative figure

**MaxChar**
- `for let in` is for object, while `for let of` is for array

**FizzBuzz**
- use `modulo` % to check if a number has remainder given a denominator. remainder is also always less than the denominator
- reminder that in `switch(true) { case }`, `true` is used as a check if the `case` statements are true. most times `switch` checks for whether the outputs matches `case` conditions only.

**Array Chunking**
- `splice` vs `slice`. `splice` modifies the original array while `slice` doesn't

**Anagrams** 
- `sort()` don't forget there is sort method for alphabets because it compares sequences of UTF-16 code units values.
- also learnt that `!=` and `!==` will give very confusing result. This is why TypeScript is required.

**Capitalize**
- `.slice(1)` means start slicing from second letter onwards until the end. normally we use slice as `.slice(1,5)`. It means start slicing from second letter to sixth letter.
- `.charAt(0)` returns character of a string based on the index
- `.toUpperCase()` capitalize the entire string

**Steps**
- the completed exercises proposes a "column" paradigm to thinking about the code
- recursion best practice
  - identify the bare minimum information needed to represent the problem so that it is easy to reason about
  - avoid infinite recursion with default settings to limit the number of loops
  - if no work to do end the loop with return
  - if there is work, call the function and ensure the arguments are changed
  - example code
  ```
  function steps(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }

    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
  }
  ```
- use `<char>.repeat(number)` to duplicate character or string with the number

**Pyramids**
- first find the relationship between the rows and columns. DO NOT find the relationship between one pyramid with another. The relationship should be contained within the give number. that will help us find the columns. for example, `pyramid(3)` has 5 columns. the algorithm relationship is `2 * n - 1`, `n` being the number of rows.
- get the midpoint of column with `Math.floor((2*n-1)/2)`, (`Math.floor()` rounds the number down to the nearest integer) then convert the numbers next to it to pounds.
```
const columns = [0, 1, 2, 3, 4];
const row = 1;

Math.floor(5/2)
Math.floor(5/2) + 1
Math.floor(5/2) - 1

if const row = 2;
Math.floor(5/2) + 2
Math.floor(5/2) - 2
```

**Vowels**
- use `.includes()` helper method to check if an element exists in an array
- use regex with `.match()` helper method to check if a string contains the characters that you are looking for.
```
const matches = str.match(/[aeiou]/gi);
return matches ? matches.length : 0;
```

**Matrix Spiral**
- ![matrix spiral](/public/16_matrix_spiral.png)
- Matrix spiral algorithm
  - First Step
    - column for `startCol` increases from left to the right, getting closer to `endCol`. 
    - then shift the `startCol` by one increment
  - Second Step
    - then row for `startRow` increases from up to down, getting closer to `endRow`
    - then shift the `startRow` by one increment
  - Third Step
    - column for `endCol` decreases from right to left, getting closer to `startCol`
    - then shift the `endCol` by one decrement
  - Fourth Step
    - column for `endRow` decreases from bottom to top, getting closer to `startRow`
    - then shift the `endRow` by one drecrement
  - Repeat steps one to four
    - continue this loop until `startCol` and `endCol` meets and `startRow` and `endRow` meets

**Runtime Complexity**
- Describes the performance of an algorithm. How much more processing power/time is required to run your algorithm if we double the inputs?
- Types of Big O Notations or Runtime Complexity
![big o notation](/public/15_big_o_notation.png)
- Tip for Identifying Runtime Complexity
![tips runtime complexity](/public/15_tips_runtime_complexity.png)

**Space Complexity**
- How much more memory is required by doubling the problem set?
