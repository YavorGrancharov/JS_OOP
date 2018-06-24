'use strict'

console.log('\nREADY\n')

class Node {
    constructor(el) {
        this.el = el
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList

    add(el) {
        let node = new Node(el)
        let currrent
        if (this.head == null) {
            this.head = node
        } else {
            currrent = this.head

            while (currrent.next) {
                currrent = currrent.next
            }

            currrent.next = node
        }
        this.size++
    }

    insert(el, index) {
        if (index < 0 || index > this.size) {
            return false
        } else {
            let node = new Node(el)
            let current, prev
        
            current = this.head

            if (index == 0) {
                node.next = this.head
                this.head = node
            } else {
                current = this.head
                let iter = 0

                while (iter < index) {
                    iter++
                    prev = current
                    current = current.next
                }
    
                node.next = current
                prev.next = node
            }
            this.size++
        } 
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return -1
        } else {
            let current, prev, iter = 0
            current = this.head
            prev = current

            if (index == 0) {
                this.head = current.next
            } else {
                while(iter < index) {
                    iter++
                    prev = current
                    current = current.next
                }

                prev.next = current.next
            }
            this.size--

            return current.el
        }
    }
}

module.exports = LinkedList