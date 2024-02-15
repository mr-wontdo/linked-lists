import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.prepend('test0');
list.pop();

console.log(list.size()); // 4
console.log(list.head()); // Node { value: 'test0', nextNode: [Node] }
console.log(list.tail()); // Node { value: 'test3', nextNode: null }
console.log(list.at(2)); // Node { value: 'test2', nextNode: [Node] }
console.log(list.contains('test2')); // true
console.log(list.find('test2')); // 2

console.log(list.toString()); // (test0) -> (test1) -> (test2) -> (test3) -> null

list.insertAt('test insertion', 3);
console.log(list.toString()); // (test0) -> (test1) -> (test2) -> (test insertion) -> (test3) -> null

list.removeAt(3);
console.log(list.toString()); // (test0) -> (test1) -> (test2) -> (test3) -> null