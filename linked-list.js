/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;  
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let lastItem;
    if (this.length === 1) {
      lastItem = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      lastItem = currentNode.next.val;
      currentNode.next = null;
      this.tail = currentNode;  
    }
    this.length -= 1;
    return lastItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstItem = this.head.val;
    if (this.length === 1) {
      this.tail = null;
    } 
    this.head = this.head.next;
    this.length -= 1;
    return firstItem;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head,
      count = 0;
    while (count !== idx) {
      currNode = currNode.next;
      count += 1;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head,
      count = 0;
    while (count !== idx) {
      currNode = currNode.next;
      count += 1;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (idx === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let currNode = this.head,
          count = 0;
        
        while (count !== (idx - 1)) {
          currNode = currNode.next;
          count += 1;
        }
        const nodeAfter = currNode.next;
        currNode.next = newNode;
        if (nodeAfter) newNode.next = nodeAfter;
        else this.tail = newNode;
      }
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let removedItem;
    if (this.length === 1) {
      removedItem = this.head.val;
      this.head = null;
      this.tail = null;
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let currNode = this.head,
        count = 0;
      while (count !== (idx - 1)) {
        currNode = currNode.next;
        count += 1;
      }
      removedItem = currNode.next.val;
      currNode.next = currNode.next.next;
    }
    this.length -= 1;
    return removedItem;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    
    let currNode = this.head,
      count = 0,
      sum = 0;
    while (count < this.length) {
      sum += currNode.val;
      currNode = currNode.next;
      count += 1;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
