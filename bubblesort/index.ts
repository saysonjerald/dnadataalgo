import { lstat } from "fs";

class ListNode<T = any> {
  value: T;
  right: ListNode<T> | null;
  left: ListNode<T> | null;
  constructor(value: T) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class LinkedList<T = any> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  //#region Sir BON's code
  push(value: T): T {
    const node: ListNode<T> = {
      value,
      left: null,
      right: null,
    };

    if (this.head == null) {
      this.head = node;
      return value;
    }

    let curr: ListNode<T> = this.head;
    while (curr.right != null) {
      curr = curr.right;
    }
    node.left = curr;
    curr.right = node;

    return value;
  }
  pop(): T | null {
    if (this.head == null) return null;
    let cur = this.head;
    while (cur.right != null) {
      cur = cur.right;
    }
    let curValue = cur.value;
    if (cur.left === this.head) {
      this.head = null;
    } else {
      cur.left!.right = null;
    }

    return curValue;
  }
  shift(): T | null {
    if (this.head === null) return null;
    let headValue = this.head.value;

    if (this.head.right === null) {
      this.head = null;
    } else {
      this.head.right!.left = null;
      this.head = this.head.right;
    }
    return headValue;
  }
  getAll(): Array<T> {
    if (this.head == null) return [];
    if (this.head.right === null) return [this.head.value];

    let values = [];
    let cur: ListNode<T> | null = this.head;
    while (cur != null) {
      values.push(cur.value);
      cur = cur.right;
    }

    return values;
  }
  get(index: number): T | null {
    if (!this.head) return null;

    // if(index == 0 )

    let count = 0;
    let cur = this.head;
    let value: T | null = null;
    while (count <= index && cur != null) {
      value = cur.value;
      count++;
      //@ts-ignore
      cur = cur.right;
    }

    return value;
  }
  remove(index: number): void {
    if (!this.head) return;

    // if(index == 0 )

    let count = 0;
    let cur = this.head;
    while (count != index && cur != null) {
      count++;
      //@ts-ignore
      cur = cur.right;
    }

    if (cur === this.head) {
      this.head = null;
      return;
    }

    if (cur != null) {
      const { left, right } = cur;

      cur.left!.right = right;
      cur.right!.left = left;
    }
  }
  splice(value: T, index: number = 0): T | null {
    if (index < 0) return null;
    if (this.head == null && index > 0) return null;
    if (this.head == null && index == 0) return this.push(value);

    let count = 0;
    let cur = this.head;
    while (count != index && cur != null) {
      cur = cur?.right;
      count++;
    }
    if (count != index) {
      return null;
    } else {
      const node: ListNode<T> = {
        left: cur!.left,
        right: cur,
        value,
      };
      cur!.left!.right = node;
    }

    return value;
  }

  map<P = any>(fn: (item: T) => P): Array<P> {
    if (this.head === null) return [];

    const results = [];
    let cur = this.head;
    while (cur != null) {
      results.push(fn(cur.value));
      cur = cur.right as ListNode<T>;
    }

    return results;
  }

  forEach(fn: (item: ListNode<T>) => void): void {
    if (this.head === null) return;

    let cur = this.head;
    while (cur != null) {
      fn(cur);
      cur = cur.right as ListNode<T>;
    }

    return;
  }

  isSorted(list: LinkedList<number>): boolean {
    let result = true;

    list.forEach((item) => {
      if (item === list.head) return;
      if (item.left!.value > item.value) result = false;
    });
    return result;
  }

  //#endregion

  // Swap value of given node
  swapData(first, second) {
    const temp = first.value;
    first.value = second.value;
    second.value = temp;
  }

  getLength() {
    let list = this.head;
    let counter = 1;
    while (list.right != null) {
      list = list.right;
      counter++;
    }
    return counter;
  }

  // bubbleSort(list: LinkedList) {
  //   if (!list || !list.head) return;
  //   let p1;
  //   let p2 = null;
  //   let hasChanged;

  //   do {
  //     hasChanged = false;
  //     p1 = list.head;

  //     while (p1.right != p2) {
  //       if (p1.value > p1.right.value) {
  //         this.swapData(p1, p1.right);
  //         hasChanged = true;
  //       }
  //       p1 = p1.right;
  //     }
  //     p2 = p1.right;
  //   } while (hasChanged != false);
  //   return list;
  // }

  bubbleSort(list: LinkedList) {
    this.bubbleSort(list);
  }

  insertionSort() {
    if (!this.head) return;
    let p1 = this.head;
    let p2 = null;

    while (p1 != null) {
      p2 = p1.right;

      while (p2 != null && p2.left != null && p2.value < p2.left.value) {
        this.swapData(p2, p2.left);
        p2 = p2.left;
      }

      p1 = p1.right;
    }
  }

  shellSort() {
    let p1 = this.head;
    let p2 = p1;
    let gap = 1;
    const linkedListLength = this.getLength();

    //Getting the gap
    while (gap < linkedListLength) {
      const newGap = gap * 3 + 1;

      if (newGap > linkedListLength - 1) {
        break;
      }

      gap = gap * 3 + 1;
    }

    let p1Counter = gap;
    let notSorted = true;

    do {
      let counter = 0;
      do {
        if (counter % gap == 0 && counter !== 0) {
          if (p1.value > p2.value) {
            this.swapData(p1, p2);
          }
          counter = 0;
        }

        p2 = p2.right;
        counter++;
      } while (p2 != null);

      p1 = p1.right;
      p2 = p1;
      p1Counter--;
      if (p1Counter === 0) {
        this.insertionSort();
      }
    } while (p1Counter !== 0);
  }

  mergeSortedList(a, b) {
    let result = null;

    if (a === null) {
      return b;
    }

    if (b === null) {
      return a;
    }

    //Recursively merge the list by calling the same function with appropriate next value
    if (a.value <= b.value) {
      result = a;
      result.right = this.mergeSortedList(a.right, b);
    } else {
      result = b;
      result.right = this.mergeSortedList(a, b.right);
    }
    return result;
  }

  getMiddleList(head) {
    if (head === null) {
      return head;
    }

    let slow = head,
      fast = head;

    while (fast.right !== null && fast.right.right !== null) {
      slow = slow.right;
      fast = fast.right.right;
    }

    return slow;
  }

  mergeSort(head) {
    if (head === null || head.right === null) {
      return head;
    }

    //Break the list from the middle
    let middle = this.getMiddleList(head);
    let middleNext = middle.right;
    middle.right = null;

    //Sort the lower bound
    let left = this.mergeSort(head);

    //Sort the upper bound
    let right = this.mergeSort(middleNext);

    //return merged sorted list
    return this.mergeSortedList(left, right);
  }
}

const list = new LinkedList<number>();

for (let i = 0; i < 106; i++) {
  list.push(Math.ceil(Math.random() * (i + 1)));
}

// list.push(25);
// list.push(24);
// list.push(21);
// list.push(20);
// list.push(19);
// list.push(15);
// list.push(12);
// list.push(10);
// list.push(9);
// list.push(7);
//#region  UNUSED FUNCTIONS

//#endregion

// list.shellSort();
list.mergeSort(list.head);

console.log(list.getAll());
