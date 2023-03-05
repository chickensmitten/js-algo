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
- `reverse()` there is an existing string that reverses.

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

