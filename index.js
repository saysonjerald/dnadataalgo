class LinkList{
  constructor(arr) {
    this.array = arr;
  }

  traverse(node) {
    if (!node) return;

    console.log(`I am at node:${node.value}`);
    this.traverse(this.array[node.next]);

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

const newList = new LinkList(arr);
newList.traverse(arr[0]);