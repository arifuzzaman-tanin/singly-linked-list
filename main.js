class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    let traversedNode = this.traverseToIndex(index - 1);
    let holdingNode = traversedNode.next;
    const node = new Node(value);
    traversedNode.next = node;
    node.next = holdingNode;
    return this;
  }

  remove(index) {
    if (index <= this.length && this.length >= 3) {
      if (index === 0) {
        let headNode = this.head;
        this.head = headNode.next;
      } else if (index === this.length) {
        let tailNode = this.traverseToIndex(index - 1);
        tailNode.next = null;
        this.tail = tailNode;
      } else {
        let traversedNode = this.traverseToIndex(index - 1);
        let nodeToRemove = traversedNode.next;
        traversedNode.next = nodeToRemove.next;
      }
      this.length--;
    }

    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(8);
linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.remove(4);
linkedList.printList();
console.log(linkedList);
