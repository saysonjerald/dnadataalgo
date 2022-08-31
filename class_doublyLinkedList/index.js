/* eslint-disable max-classes-per-file */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    if (val === undefined) return;

    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  remove() {
    if (this.length === 0) return false;

    const popped = this.tail;
    const newTail = this.tail.prev;
    if (newTail) {
      newTail.next = null;
      this.tail.prev = null;
    } else {
      this.head = null;
    }

    this.tail = newTail;
    this.length--;

    return popped;
  }

  removeHead() {
    if (!this.head) return false;

    const shiftedNode = this.head;
    const newHead = this.head.next;
    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;
    this.length--;
    return shiftedNode;
  }

  insertHead(val) {
    if (val === undefined) return;

    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insertAtIndex(index, val) {
    if (index < 0 && index > this.length && val === undefined) return false;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.insert(val);
    } else {
      const newNode = new Node(val);
      const after = this.getAtIndex(index);
      const before = after.prev;
      after.prev = newNode;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
      this.length++;
    }
    return this;
  }

  removeAtIndex(index) {
    if (index < 0 && index > this.length) return false;
    let removedNode;
    if (index >= this.length) {
      return false;
    }
    if (index == 0) {
      removedNode = this.removeHead();
    } else if (index == this.length - 1) {
      removedNode = this.remove();
    } else {
      removedNode = this.getAtIndex(index);
      const after = removedNode.next;
      const before = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      before.next = after;
      after.prev = before;
      this.length--;
    }
    return removedNode;
  }

  getAtIndex(index) {
    if (index < 0 && index > this.length) return false;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  traverse() {
    this.traverse();
  }
}

const list = new DoublyLinkedList();

// TODO ------------ INSERT (TAIL)--------------------------
list.insert(0).insert(1).insert(2).insert(3).insert(4).insert(5).insert(600);

// TODO ------------ INSERT HEAD -----------------------------
// list.insertHead('start');

// TODO ------------ INSERT AT INDEX --------------------------
// list.insertAtIndex(6, 'apple');

// TODO ------------ REMOVE (TAIL) ---------------------------
// list.remove();

// TODO ------------ REMOVE HEAD -----------------------------
// list.removeHead();

// TODO ------------ REMOVE AT INDEX --------------------------
// list.removeAtIndex(0);

// TODO ------------ GET AT INDEX -----------------------------
// console.log(list.getAtIndex(9));

// TODO ------------ Traverse them using recursion ------------
list.console.log(list);
