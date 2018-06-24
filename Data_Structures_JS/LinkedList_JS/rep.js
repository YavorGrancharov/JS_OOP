function LinkedList() {
    let size = 0
    let head = null

    let Node = function (el) {
        this.el = el
        this.next = null
    }

    this.size = function () {
        return size
    }

    this.head = function () {
        return head
    }

    this.add = function (el) {
        let node = new Node(el)
        if (head == null) {
            head = node
        } else {
            let current

            current = head

            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        size++
    }

    this.insert = function (el, index) {
        if (index < 0 || index > size) {
            return -1
        } else {
            let node = new Node(el)
            let current, prev
            current = head
            if (index == 0) {
                node.next = head
                head = node
            } else {
                current = head
                let iter = 0
                 while(iter < index) {
                     iter++
                     prev = current
                     current = current.next
                 }
                 node.next = current
                 prev.next = node
            }
            size++
        }
    }
}

let n = new LinkedList()

n.add(1)
n.add(2)
console.log(n.size())
console.log(n.head())
n.insert(3, 0)
console.log(n.size())
console.log(n.head())