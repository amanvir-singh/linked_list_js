const LinkedList = require('./src/LinkedList');

const list = new LinkedList();

// Append nodes
list.append(1);
list.append(2);
list.append(3);
console.log("After Append:->>> ", list);
console.log("\n\n");

// Prepend a node
list.prepend(0);
console.log("After Prepend:->>> ", list);
console.log("\n\n");

// Remove the last node
const poppedNode = list.pop();
console.log("After Pop:->>>" , list);
console.log("Popped Node:->>> ", poppedNode);
console.log("\n\n");

// Remove a node at a specific position (0-based index)
const removedNode = list.removeAt(1);
console.log("After Remove:->>> ", list);
console.log("Removed Node:->>> ", removedNode);
console.log("\n\n");

// Insert a node at a specific position
list.insertAt(4, 2);
console.log("After InsertAt:->>> ", list);
