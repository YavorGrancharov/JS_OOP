'use strict'

console.log('ready')

class Queue {
    constructor() {
        this.items = []
    }

    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()

    enqueue(item) {
        return this.items.push(item)
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Underflow')
        }
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length == 0
    }

    printQueue() {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }
        return str
    }
}

module.exports = Queue