import LinkedList from "./linkedlist-class.js";

const list = new LinkedList()
list.append("sumn")
list.prepend(234)
list.insertAt("d", 1)
list.pop()
console.log(list.head)