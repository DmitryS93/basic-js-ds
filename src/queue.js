const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null
    this.length = 0
  }

  getUnderlyingList() {
    let list = { value: this.head.value, next: null };
      
    while(this.head.next) {
      this.head = this.head.next
      list = { value: this.head.value, next: list };
    }
  return list
  }

  enqueue(value) {
    let node = new Node(value)
  if (this.head  === 0) {
    this.head = node
  } else {
    node.next = this.head;
    this.head = node
  }
  this.length = this.length + 1
  }

  dequeue() {
    
    let current = this.head
    let start = current;
    while (current.next !== null) {
      start = current;
      current = current.next;
    }
    start.next = null;
    this.length = this.length - 1
    return current.value
  }
  
}

module.exports = {
  Queue
};
