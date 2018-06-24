console.log('Hi!')

function init() {
    let name = 'pesho'
    function displayName() {
        console.log(name)
    }
    displayName()
}
init()

function func() {
    let name = 'gosho'
    function displayName() {
        console.log(name)
    }
    return displayName
}

let res = func()
res()

function add(x) {
    return function(y) {
        return x + y
    }
}

let add5 = add(5)
let add10 = add(10)

console.log(add5(2))
console.log(add10(5))

let hundred = 100
let five = 5

function multiply(x, y) {
    return x * y
}
let _5hundred = multiply(hundred, five)
console.log(_5hundred)

//impure function - one that affects outside of its own scope
function changeAge(person) {
    person.age = 25
    return person
}

let Alex = {
    name: 'Alex',
    age: 30
}

let changeAlex = changeAge(Alex)

console.log(Alex)
console.log(changeAlex)

//pure function - doesn't change original object
function changeAgePure(person) {
    let newPerson = JSON.parse(JSON.stringify(person))
    newPerson.age = 25

    return newPerson
}

let John = {
    name: 'John',
    age: 30
}

let changeJohn = changeAgePure(John)

console.log(John)
console.log(changeJohn)

//Scope
let x = 5

function m() {
    let f = 10
    console.log(f)
    console.log(x)
}

m()

console.log(f)

//if let/var keywords are omited js makes variable global if it isn't already
let z = 5

function fun() {
    let z = 20
    y = 10
    let j = 50
}

fun()
console.log(z)
console.log(y)
console.log(j)//j is not defined