'use strict'

const LinkedList = require('./index')

let list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.insert(4, 2)
console.log(list.head)
console.log(list.size)
list.insert(5, 0)
console.log(list.head)
console.log(list.size)
list.remove(2)
console.log(list.head)
console.log(list.size)