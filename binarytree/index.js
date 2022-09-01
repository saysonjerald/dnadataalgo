/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // helper recursive method for insertion
  compareAndInsert(currentNode, newNode) {
    // Avoid duplicaiton
    if (currentNode.value === newNode.value) {
      console.log('Node already exists!', currentNode);
      return false;
    }
    // if the 'new node' is greater than current
    if (newNode.value > currentNode.value) {
      // if there is no node assigned to right, assign it and break our of the loop
      if (!currentNode.right) {
        currentNode.right = newNode;
        return true;
      }
      // calls function recursively with new node for comparison
      this.compareAndInsert(currentNode.right, newNode);

      // if node is less than current
    } else if (newNode.value < currentNode.value) {
      // if there is no left node, assign it and break out of loop
      if (!currentNode.left) {
        currentNode.left = newNode;
        return true;
      }
      // recursively call function with new node for comparison
      this.compareAndInsert(currentNode.left, newNode);
    }

    return true;
  }

  // checks for root node, otherwise calls recursive function
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.compareAndInsert(this.root, newNode);
    }
    return this;
  }

  preOrder() {
    const visited = [];
    const current = this.root;

    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }

  postOrder() {
    const visited = [];
    const current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };

    traverse(current);
    return visited;
  }

  inOrder() {
    const visited = [];
    const current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(20).insert(15).insert(50).insert(1);
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
