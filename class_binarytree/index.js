/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.arrVer = [];
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);

    return this;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else if (node.right === null) node.right = newNode;
    else this.insertNode(node.right, newNode);
  }

  //   convertToArray(tree) {

  //   }

  //   insertSortArr(inputArr) {
  //     const n = inputArr.length;

  //     for (let i = 1; i < n; i++) {
  //       // Choosing the first element in our unsorted subarray
  //       const current = inputArr[i];
  //       // The last element of our sorted subarray
  //       let j = i - 1;
  //       while (j > -1 && current < inputArr[j]) {
  //         inputArr[j + 1] = inputArr[j];
  //         j--;
  //       }
  //       inputArr[j + 1] = current;
  //     }
  //     return inputArr;
  //   }
}
const tree = new BinarySearchTree();
tree
  .insert(1)
  .insert(2)
  .insert(3)
  .insert(4)
  .insert(5)
  .insert(6)
  .insert(7)
  .insert(8)
  .insert(9)
  .insert(10);

console.log(tree);
