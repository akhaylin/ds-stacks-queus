/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}
/** Linked List */
class LinkedList {
  head = null;
  tail = null;
  length = 0

  constructor(vals=[]) {
    for (let val of vals) {
      this.push(val)
    }
  }
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;

    this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if(this.length === 0) throw new Error("Empty list");

    if(this.length === 1){
      this.head = this.tail = null;
      this.length--;
      return current.val;
    }

    while(current !== null){
      if(current.next.next === null){
        let val = current.next;

        current.next = null;

        this.tail = current;
        this.length--;

        return val.val;
      }
      current = current.next;
    }


  }
}
/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor () {
    this.linkedList = new LinkedList();
  }


  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.first === null) this.first = newNode;

    if (this.last !== null) this.last.next = newNode;

    this.last = newNode;

    this.size++;


  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("Queue is empty")
    let currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return currentFirst.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) throw new Error("Queue is empty");
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
