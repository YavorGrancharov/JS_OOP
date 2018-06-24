'use strict'

console.log('ready')

class Stack {
    constructor() {
        this.items = []
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    //max()
    // isEmpty()
    //emptyStack()
    // printStack()

    push(item) {
        return this.items.push(item)
    }

    pop() {
        if (this.items.length === 0) {
            console.log('Underflow')
        }
        return this.items.pop()
    }

    peak() {
        return this.items[this.items.length - 1]
    }

    max() {
        let max = Number.MIN_VALUE
        return this.items.reduce(function(i, el) {
            max = el > max ? el : max
            return max
        })
    }

    isEmpty() {
        return this.items.length == 0
    }

    emptyStack() {
        return this.items = []
    }

    printStack() {
        console.log(this.items)
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push('3')
stack.push('4')
stack.printStack()
console.log(stack.max())
console.log(stack.peak())
console.log(stack.pop())
stack.printStack()
console.log(stack.peak())
console.log(stack.max())
stack.push(10)
stack.push(99)
stack.push(45)
stack.push(78)
console.log(stack.max())
console.log(stack.isEmpty())
stack.emptyStack()
console.log(stack.isEmpty())