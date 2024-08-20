class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
          newTail = current;
          current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return current;
    }
    
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        this.length++;
        return this;
      }
}