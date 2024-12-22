import Node from "./node-class.js";

export default class LinkedList {
  #head = null;
  get head() {
    return this.#head;
  }
  tail() {
    let node = this.#head;
    while (node && node.next) node = node.next;
    return node;
  }
  append(value) {
    if (!this.#head) this.#head = new Node(value);
    else this.tail().next = new Node(value);
  }
  prepend(value) {
    const prev = this.#head;
    this.#head = new Node(value, prev);
  }
  size() {
    let size = 0;
    let node = this.#head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
}
