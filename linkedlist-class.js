import Node from "./node-class.js";

export default class LinkedList {
  #head = null;
  get head() {
    return this.#head;
  }
  append(value) {
    if (!this.#head) this.#head = new Node(value);
    else {
      let node = this.#head;
      while (node.next) node = node.next;
      node.next = new Node(value);
    }
  }
}
