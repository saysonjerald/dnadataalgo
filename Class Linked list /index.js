class LinkedLists {
  constructor(arry) {
    this.array = arry;
  }

  // eslint-disable-next-line class-methods-use-this
  traverse() {
    // If use didn't input an arrays of data;
    if (!this.array) return;

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.array[j].next === null) this.array[j].next = this.array.length;

        if (this.array[i].next < this.array[j].next) {
          const x = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = x;
        }
      }
    }

    this.array[this.array.length - 1].next = null;
  }
}

const data = [
  {
    data: 200,
    next: 2,
  },
  {
    data: 100,
    next: 1,
  },
  {
    data: 500,
    next: null,
  },
  {
    data: 400,
    next: 4,
  },
  {
    data: 300,
    next: 3,
  },
];

const newList = new LinkedLists(data);
newList.traverse();
console.log(newList.array);
