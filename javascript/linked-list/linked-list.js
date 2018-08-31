class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    if (this.tail !== null) {
      let newTail = new Node(value, this.tail);
      this.tail.next = newTail;
      this.tail = newTail;
    } else {
      let node = new Node(value);
      this.head = node;
      this.tail = node;
    }
  }

  pop() {
    const result = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
    }
    return result;
  }

  shift() {
    const result = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return result;
  }

  unshift(value) {
    if (this.head !== null) {
      let newHead = new Node(value, null, this.head);
      this.head.prev = newHead;
      this.head = newHead;
    } else {
      let node = new Node(value);
      this.head = node;
      this.tail = node;
    }
  }

  count() {
    let node = this.head;
    let n = 0;
    while (node) {
      if (node) {
        n++;
        if (node === node.next) break;
        node = node.next;
      }
    }
    return n;
  }

  delete(value) {

    let node = this.head;
    if (node.value === this.tail.value) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (node.value !== value) {
      node = node.next;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    node = null;
  }
};

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

module.exports = LinkedList;