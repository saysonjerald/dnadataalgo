const user = [
  { name: 'apple', age: 1 },
  { name: 'nothing', age: null },
  { name: 'banana', age: 2 },
  { name: 'catchup', age: 3 },
  { name: 'doctor', age: 4 },
];

function rec(data) {
  if (!data) return;

  console.log('Hello');
  rec(user[data.age]);
}

rec(user[0]);
// traverse(node) {
//     if (!node) return;

//     console.log(`I am at node:${node.value}`);
//     this.traverse(this.array[node.next]);
//   }
