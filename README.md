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
- `reduce()`
- `reverse()`
- `every()`
- `Math.sign(n)`
- `for let in` is for object, while `for let of` is for array
- use `modulo` % to check if a number has remainder given a denominator. remainder is also always less than the denominator
- `splice` vs `slice`. `splice` modifies the original array while `slice` doesn't
- `sort()` don't forget there is sort method for alphabets