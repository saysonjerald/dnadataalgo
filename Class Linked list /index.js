/* eslint-disable class-methods-use-this */

// #region  PROCESS
class LinkedLists {
  constructor(arry) {
    const newArr = [];
    for (let i = 0; i < arry.length; i++) {
      newArr.push({ value: arry[i], next: i + 1 });
    }

    this.array = newArr;
  }

  traverse() {
    if (!this.array) return;

    // SORTING
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

  insert(newData) {
    this.array[this.array.length - 1].next = this.array.length;
    this.array.push({ value: newData, next: null });
  }
}
// #endregion

// #region  EXECUTE
const data = [200, 100, 500, 400, 300];

const newList = new LinkedLists(data);

// TODO  ------------ TRAVERSING -------------------
newList.traverse();

// IN
newList.insert(900);
console.log(newList.array);
// #endregion
