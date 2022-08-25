// #region  ALGORITHM
class DoublyLinkedList {
  constructor(arry) {
    this.array = arry;
  }

  traverse() {
    if (!this.array) return;

    for (let i = 0; i < this.array.length; i++) {
      // const element = array[index];
      process.stdout.write(
        `|${this.array[i].prev}|${this.array[i].data}|${this.array[i].next}| --> `
      );
    }
  }
}
// #endregion

// #region  EXECUTION
const arr = [
  {
    data: 'Apple',
    next: 2,
    prev: null,
  },
  {
    data: 'Banana',
    next: 3,
    prev: 1,
  },
  {
    data: 'Cinamon',
    next: 4,
    prev: 3,
  },
  {
    data: 'Dazzle',
    next: null,
    prev: 4,
  },
];

const newDoublyList = new DoublyLinkedList(arr);
newDoublyList.traverse();
// #endregion
