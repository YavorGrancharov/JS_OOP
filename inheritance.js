console.log('READY!')

//IIFE
//(function solve() {
//    Array.prototype.last = function() {
//        return this[this.length - 1]
//    }
//})()


//Recursion
let func = function fib(y) {

}

    //IIFE
    (function named(x, y) {
        console.log(x * y)
    }(5, 6))


//Call, Apply and Bind

//Bind
function Food() {
    Food.firstName = 'Yavor'
    Food.lastName = 'G'

    let fullName = function () {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }.bind(Food)

    fullName()
}

Food()

Function.prototype.makeJuice = function () {

    console.log("Making " + this.name + " juice");

}

var myFruit = function Food() {

    this.name = "kiwi";

}.makeJuice();


book = {
    title: 'My Book',
    author: 'Yavor',
    summary: function () {
        return this.title + ' by ' + this.author
    }
}

console.log(book.summary())
console.log(book.__proto__)

tarzan = {
    title: 'Tarzan'
}

tarzan.__proto__ = book

console.log(tarzan.summary())


//Constructor function
function Book(title, author) {
    this.title = title
    this.author = author

    this.info = function () {
        return this.title + ' by ' + this.author
    }
}

let newBook = new Book('My Book', 'Yavor')
console.log(newBook.info())

function Sailor(boat) {
    this.boat = boat || 'Catamaran'
}

Sailor.prototype.sail = function () {
    console.log(`Sailing on ${this.boat}`)
}

function Capitan(fisstName, lastName) {
    Sailor.call(this)
    this.firstName = fisstName
    this.lastName = lastName
}

Capitan.prototype = Object.create(Sailor.prototype)
Capitan.prototype.constructor = Capitan
let capitan = new Sailor('Jack', 'Sparrow')
console.log(capitan.sail())

console.log(Capitan instanceof Sailor)
console.log()

//Prototype Chain
class Meal {
    constructor(type) {
        this.type = type || 'Hardcover'
    }

    write() {
        console.log(`Eating a ${this.type} meal!`)
    }
}

class SecondMeal extends Meal {
    constructor(type, tool, client) {
        super(type)
        this.tool = tool
        this.client = client
    }
}

let newMeal = new SecondMeal('meat', 'fork', 'Yavor')
newMeal.write()

//Extending built-in Objects
let comics = ["American Ninja", "Superman", "Batman"]
let books = ["tarzan", "jungle book", "cinderella"]

Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length - 1]
    }
})

let lastBook = books.last
let lastComics = comics.last
console.log(lastBook)
console.log(lastComics)

//Second Method
Array.prototype.first = function () {
    return this[0]
}

let froots = ['bannana', 'kiwi', 'lemon']
console.log(froots.first())

//JS D Good Parts
let myMammal = {
    name: 'Herb',
    getName: function () {
        return this.name
    },
    says: function () {
        return this.saying || ''
    }
}

let myCat = Object.create(myMammal)
myCat.name = 'Henrieta'
myCat.saying = 'meow'
myCat.purr = function (n) {
    let i, s = ''
    for (i = 0; i < n; i++) {
        if (s) {
            return s += '-'
        }
        s += 'r'
    }
    return s
}

myCat.getName = function () {
    return this.says() + ' ' + this.name + ' ' + this.says()
}

console.log(myCat.getName())

//Arrays
let arr = ['one', 'two', 3, 4]
console.log(arr)
console.log(arr.length)
arr.length = 3
console.log(arr)
console.log(arr.length)
arr[arr.length] = 4
console.log(arr)
console.log(arr.length)
arr.length = 3
console.log(arr)
arr.length = 4
console.log(arr)

//If is Array Function
let isArray = function (prop) {
    return prop &&
        typeof prop === 'object' &&
        typeof prop.length === 'number' &&
        typeof prop.splice === 'function' &&
        !(prop.propertyIsEnumerable('length'))
}

let obj = { 1: 1, 2: 2 }
let ar = [1, 2, 3]
console.log(isArray(obj))
console.log(isArray(ar))

//Array.reduce
const array = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, a) {
    let res = accumulator + currentValue
    return { res, accumulator, currentValue, currentIndex }
})
console.log(array)

let ProtoHelper = function () { }

ProtoHelper.prototype.dim = function (dimention, initial) {
    let a = [], i
    for (i = 0; i < dimention; i++) {
        a[i] = initial
    }
    return a
}

let c = ProtoHelper.prototype.dim(10, 0)
console.log(c)

//Make matrix
let Matrix = function () { }

Matrix.prototype.matrix = function (m, n, initial) {
    let a, i, j, mat = []
    for (i = 0; i < m; i++) {
        a = []
        for (j = 0; j < n; j++) {
            a[j] = initial
            initial++
        }
        mat[i] = a
    }
    return mat
}

let newMtrix = Matrix.prototype.matrix(4, 4, 0)
console.log(newMtrix)