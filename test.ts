interface IListElement {
  value: number;
  next: number | null;
}

class List {
  #arr: IListElement[];
  constructor(arr: IListElement[]) {
    this.#arr = arr;
  }

  traverse(node: IListElement) {
    if (!node) return;

    console.log(`I am at node:${node.value}`);
    this.traverse(this.#arr[node.next as number]);
  }

  get(index: number) {
    let i: number;
    let result: IListElement = this.#arr[0];

    for (i = 0; i < this.#arr.length; i++) {
      if (i === index) {
        result = this.#arr[i];
      }
    }
    return this.#arr.map((e) => e.value + ":" + e.next);
  }

  insert(node: IListElement) {
    let i: number;

    for (i = 0; i < this.#arr.length; i++) {
      if (this.#arr[i].next === null) {
        this.#arr[i].next = this.#arr.length;
      }
    }
    this.#arr.push(node);
    return this.#arr.map((e) => e.value + ":" + e.next);
  }

  insertAt(node: IListElement, index: number) {
    let i: number;

    for (i = 0; i < this.#arr.length; i++) {
      if (index == i) {
        node.next = this.#arr[i].next;
        this.#arr[i].next = this.#arr.length;
      }
    }
    this.#arr.push(node);
    return this.#arr.map((e) => e.value + ":" + e.next);
  }

  remove(node: IListElement) {
    let i: number;
    let curr_index: any = 0;
    for (i = 0; i < this.#arr.length; i++) {
      if (!curr_index) curr_index = this.#arr[i]?.next;
      if (this.#arr[i].value === node.value) {
        this.#arr.splice(i, 1);
      }
      if ((this.#arr[i].next ?? 0) > curr_index) {
        curr_index = this.#arr[i]?.next;
      }
      if (i === this.#arr.length - 1)
        this.#arr.map((e) => {
          if (e.next === curr_index) e.next = null;
          return e;
        });
    }

    return this.#arr.map((e) => e.value + ":" + e.next);
  }
  removeAt(index: number) {
    this.#arr.splice(index, 1);
    return this.#arr.map((e) => e.value + ":" + e.next);
  }
  removeHead() {
    let i: number;
    let curr_index: any = 0;
    for (i = 0; i < this.#arr.length; i++) {
      curr_index = this.#arr[i].next;
      if (!this.#arr[i].next) {
        if (this.#arr[i].next !== null) {
          curr_index = this.#arr[i]?.next;
        }
      }

      if (i === this.#arr.length - 1) {
        this.#arr = this.#arr
          .filter((e) => e.next !== curr_index)
          .map((e) => {
            // @ts-ignore
            if (e.next > curr_index) e.next -= curr_index;
            return e;
          });
      }
    }
    return this.#arr.map((e) => e.value + ":" + e.next);
  }
  removeTail() {
    let i: number;
    let curr_index: any = 0;
    for (i = 0; i < this.#arr.length; i++) {
      curr_index = this.#arr[i].next;
      if (!this.#arr[i].next) {
        if (this.#arr[i].next === null) {
          this.removeAt(i);
          curr_index = this.#arr[i]?.next;
        }
      }

      if (i === this.#arr.length - 1) {
        this.#arr.map((e) => {
          if (e.next === curr_index) e.next = null;
          return e;
        });
      }
    }
    return this.#arr.map((e) => e.value + ":" + e.next);
  }
}

const arr = [
  {
    value: 12,
    next: 3,
  },
  {
    value: 10,
    next: 2,
  },
  {
    value: 30,
    next: null,
  },
  {
    value: 20,
    next: 1,
  },
];

const list = new List(arr);

// console.log(`\nGET: AFTER Then Traverse`, list.get(0));
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

// console.log(
//   `\nINSERT: AFTER Then Traverse`,
//   list.insert({ value: 40, next: null })
// );
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

// console.log(
//   `\nINSERT_AT: AFTER Then Traverse`,
//   list.insertAt({ value: 50, next: null }, 2)
// );
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

// console.log(
//   `\nREMOVE: AFTER Then Traverse`,
//   list.remove({ value: 30, next: null })
// ); // remove last
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

// console.log(`\nREMOVE_AT: AFTER then Traverse`, list.removeAt(1));
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

// console.log(`\nREMOVE_HEAD: AFTER then Traverse`, list.removeHead());
// console.log(`TRAVERSING...`);
// list.traverse(arr[0]);

console.log(`\nREMOVE_TAIL: AFTER then Traverse`, list.removeTail());
console.log(`TRAVERSING...`);
list.traverse(arr[0]);
