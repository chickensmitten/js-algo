// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(number) {
    this.array = [];
  }

  add(char) {
    this.array.unshift(char)
    return this.array
  }

  remove() {
    const char = this.array.pop()
    return char
  }

}

module.exports = Queue;
