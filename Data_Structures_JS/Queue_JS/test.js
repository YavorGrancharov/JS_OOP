const Queue = require('./index')


let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)
console.log(queue.dequeue())
console.log(queue.printQueue())
console.log(queue.front())