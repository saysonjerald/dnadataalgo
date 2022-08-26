/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertHead(val) {
    if (!val) return;

    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  insertTail(data) {
    if (!data) return;

    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.tail;
      node.prev = temp;
      temp.next = node;
      this.tail = node;
    }

    return this;
  }

  removeHead() {
    // in case list is empty
    if (!this.head) {
      return false;
    }
    // save shifted node to variable
    const shiftedNode = this.head;
    // make the new head the next (might be null)
    const newHead = this.head.next; // might be null
    // if list is more than 1
    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;
    return shiftedNode;
  }

  removeTail() {
    if (this.length === 0) {
      return false;
    }
    // get popped node
    const popped = this.tail;
    // save newTail to a variable (could be null)
    const newTail = this.tail.prev;
    // if newTail is not null
    if (newTail) {
      // sever connection to popped node
      newTail.next = null;
      // sever connection from popped node
      this.tail.prev = null;
      // in case of 1 length list
    } else {
      // make sure to edit head in case newTail is null
      this.head = null;
    }
    // assign new tail (could be null)
    this.tail = newTail;

    return popped;
  }

  accessAtIndex(index) {
    if (index >= this.length || index < 0) {
      return false;
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  insertAtIndex(index, val) {
    // if index doesn't exist
    if (!index && index < 0 && index > this.tail.next) {
      return;
    }
    if (index === 0) {
      this.insertHead(val);
    } else if (index === this.tail.next) {
      this.insertTail(val);
    } else {
      const newNode = new Node(val);
      const after = this.accessAtIndex(index);
      const before = after.prev;
      after.prev = newNode;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
    }
    return this;
  }
}

const list = new DoublyLinkedList();
list.insertTail(1).insertTail(2).insertTail(3);
list.insertAtIndex(2);

console.log(list);
