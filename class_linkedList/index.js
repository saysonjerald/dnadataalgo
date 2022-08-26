/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
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

  insertAt(data, index) {
    if (
      typeof data !== 'number' &&
      typeof index !== 'number' &&
      !data &&
      !index
    )
      return;

    if (index < 0 && index > this.array.length) return;

    const tempArr = [];
    let prev;
    for (let i = 0; i < this.array.length; i++) {
      if (i < index) {
        tempArr.push(this.array[i]);
      }

      if (i === index) {
        tempArr.push({ value: data, next: this.array[i].next });
      }

      if (i >= index) {
        tempArr.push({
          value: this.array[i].value,
          next: i !== this.array.length - 1 ? this.array[i].next + 1 : null,
        });
      }
    }
    this.array = tempArr;
  }

  removeAt(index) {
    if (
      index < 0 &&
      index > this.array.length &&
      typeof index !== 'number' &&
      !index
    )
      return;

    const tempArr = [];
    let prev;
    for (let i = 0; i < this.array.length; i++) {
      if (i < index) {
        tempArr.push(this.array[i]);
      }

      if (i > index) {
        tempArr.push({
          value: this.array[i].value,
          next: i !== this.array.length - 1 ? this.array[i].next - 1 : null,
        });
      }
    }
    this.array = tempArr;
  }

  removeHead() {
    if (!this.array.length) return;

    const tempArr = [];
    for (let i = 1; i < this.array.length; i++) {
      tempArr.push({
        value: this.array[i].value,
        next: i !== this.array.length - 1 ? this.array[i].next - 1 : null,
      });
    }
    this.array = tempArr;
  }

  removeTail() {
    if (!this.array.length) return;

    const tempArr = [];
    for (let i = 0; i < this.array.length - 1; i++) {
      tempArr.push({
        value: this.array[i].value,
        next: i !== this.array.length - 2 ? this.array[i].next - 1 : null,
      });
    }
    console.log(tempArr);
    this.array = tempArr;
  }
}
// #endregion

// #region  EXECUTE
const data = [10, 100, 200, 300, 400, 500, 1000];

const newList = new LinkedLists(data);

// TODO  ------------ TRAVERSING -------------------
newList.traverse();

// TODO ------------ INSERTING ---------------------
// newList.insert(600);

// TODO ------------ INSERT INTO -------------------
newList.insertAt(250, 2);
newList.insertAt(299, 3);

// TODO ------------ REMOVE AT -------------------
newList.removeAt(3);

// TODO ------------ REMOVE HEAD -------------------
newList.removeHead();

// TODO ------------ REMOVE TAIL -------------------
newList.removeTail();

// TODO ------------ VIEW --------------------------
console.log(newList.array);
// #endregion
