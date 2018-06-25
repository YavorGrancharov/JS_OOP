function Repository(params) {
    this.params = params
    this.data = []
    this.repo = new Map()
}

Repository.prototype.add = function (entity) {
    if (Repository.prototype.compare(this.params, entity)) {
        this.data.push(entity)
    }
    for (let i = 0; i < this.data.length; i++) {
        this.repo.set(i, this.data[i])
    }
    return this.repo
}

Repository.prototype.get = function (id) {
    if (!this.repo.has(id)) {
        throw new Error(`Entity with id: ${id} does not exist!`)
    }
    return this.repo.get(id)
}

Repository.prototype.update = function (id, entity) {
    if (!this.repo.has(id)) {
        throw new Error(`Entity with id: ${id} does not exist!`)
    }
    if (Repository.prototype.compare(this.params, entity)) {
        this.repo.set(id, entity)
    }
    return this.repo
}

Repository.prototype.del = function (id) {
    if (!this.repo.has(id)) {
        throw new Error(`Entity with id: ${id} does not exist!`)
    }
    this.repo.delete(id)
}

Repository.prototype.count = function() {
    return this.repo.size
}

Repository.prototype.compare = function (a, b) {
    let aProps = Object.getOwnPropertyNames(a)
    let bProps = Object.getOwnPropertyNames(b)

    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)

    if (aProps.length != bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]

        if (aKeys[i] !== bKeys[i]) {
            throw new Error(`Property ${aKeys[i]} is missing from the entity!`)
        }

        if (typeof b[propName] !== a[propName]) {
            throw new TypeError(`Property ${aKeys[i]} is of incorrect type!`)
        }
    }
    return true
}

//________________________________________________________

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
}
//Initialize the repository
let repository = new Repository(properties)
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
}
repository.add(entity) // Returns 0
repository.add(entity) // Returns 1
console.log(repository.get(0))
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1))
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
}
repository.update(1, entity)
console.log(repository.get(1))
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0)
console.log(repository.count()); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
}
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
}
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id
