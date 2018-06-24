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
    summary: function() {
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

    this.info = function() {
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
class Meal{
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
    get: function() {
        return this[this.length - 1]
    }
})

let lastBook = books.last
let lastComics = comics.last
console.log(lastBook)
console.log(lastComics)

//Second Method
Array.prototype.first = function() {
    return this[0]
}

let froots = ['bannana', 'kiwi', 'lemon']
console.log(froots.first())

