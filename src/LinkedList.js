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

    removeAt(position) {
        if (position < 0 || position >= this.length) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();
    
        const previousNode = this.get(position - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    
    insertAt(value, position) {
        if (position < 0 || position > this.length) return false;
        if (position === 0) return !!this.prepend(value);
        if (position === this.length) return !!this.append(value);
    
        const newNode = new Node(value);
        const previousNode = this.get(position - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        return true;
      }
}