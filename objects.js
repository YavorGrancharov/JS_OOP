'use strict'

let book = (Object.prototype, {
    title: {
        value: 'Hidden truth',
        enumerable: true,
        writable: true,
        configurable: true
    },
    author: {
        value: 'Konstantin',
        enumerable: true,
        writable: true,
        configurable: true
    }
})

book['book format'] = 'PDF'

console.log(Object.getOwnPropertyDescriptor(book, 'book format'))



Object.defineProperty(book, 'fullName', {
    get: function () {
        return this.author.firstName + ' ' + this.author.lastName
    },
    set: function (value) {
        let nameParts = value.split(' ')
        this.author.firstName = nameParts[0]
        this.author.lastName = nameParts[1]
    }
})
book.author.firstName = 'Yavor'
book.author.lastName = 'Grancharov'

console.log(book.fullName)

let Animal = Object.create(null)

Animal.name = 'Animal'
Animal.gender = 'female'
Animal.description = function () {
    return 'Gender: ' + this.gender + '; ' + 'Name: ' + this.name
}

console.log(Animal.description())

let cat = Object.create(Animal)

cat.name = 'Meyau'
cat.gender = 'male'
console.log(cat.description())

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toString() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
}

let me = new Person('Yavor', 38)
console.log(me)
console.log(me.toString())

class Friend extends Person {
    constructor(name, age, bool) {
        super(name, age)
        this.bool = bool
    }

    status() {
        if (this.bool === true) {
            return `${super.toString()} ${me.name} is a close friend of mine.`
        }
        return `${super.toString()} Me and ${me.name} are just familiar.`
    }
}

let f = new Friend('Peter Pan', 'forever young', true)
console.log(f)
console.log(f.status())

let rodent = Object.create(Animal)
rodent.size = 'S'
let capibara = Object.create(rodent)

console.log(capibara.size)

console.log(capibara.__proto__)

