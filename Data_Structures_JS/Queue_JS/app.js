'use strict'

console.log('ready')

const Queue = require('./index')

function generateBinary(n) {
    let queue = new Queue()

    queue.enqueue(1)

    while(n-- > 0) {
        let f = queue.front()
        queue.dequeue()
        console.log(f)

        let s = f
        queue.enqueue(f + '0')
        queue.enqueue(s + '1')
    }
}

generateBinary(5)