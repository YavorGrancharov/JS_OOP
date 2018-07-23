//Complete Object Prototype Inheritance Template Model

let AnswerPrototype = {
    constructor: function fn0(value) {
        this._val = value
    },
    get: function fn1() {
        return this._val
    }
}

let lifeAnswer = Object.create(AnswerPrototype)
lifeAnswer.constructor(42)
console.log(lifeAnswer.get())

let dessertAnswer = Object.create(AnswerPrototype)
dessertAnswer.constructor(3.14159)
console.log(dessertAnswer.get())

let FirmAnswerPrototype = Object.create(AnswerPrototype)
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + ' Got it? '
}

let luckyAnswer = Object.create(FirmAnswerPrototype)
luckyAnswer.constructor(7)
console.log(luckyAnswer.get())

let magicAnswer = Object.create(FirmAnswerPrototype)
magicAnswer.constructor(3)
console.log(magicAnswer.get())