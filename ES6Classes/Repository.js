class Repository {
    constructor(props) {
        this.props = props
        this.data = []
        this.repo = new Map()
    }

    add(entity) {
        if (this.compare(this.props, entity)) {
            this.data.push(entity)
        }

        let ID = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        for (let i = 0; i < this.data.length; i++) {
            this.repo.set(ID + Date.now(), this.data[i])
        }
        return this.repo
    }

    get(id) {
        if(!this.repo.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        return this.repo.get(id)
    }

    update(id, entity) {
        if(!this.repo.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        if(this.compare(this.props, entity)) {
            this.repo.set(id, entity)
        }
        return this.repo
    }

    del(id) {
        if(!this.repo.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.repo.delete(id)
    }

    get count() {
        return this.repo.size
    }

    compare(a, b) {
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
}

//________________________________________________________

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id
