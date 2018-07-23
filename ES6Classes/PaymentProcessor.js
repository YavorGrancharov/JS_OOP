class PaymentProcessor {
    constructor() {
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        }
        this.payments = []

        if (arguments.length !== 0) {
            this.setOptions(arguments[0]);
        }
    }

    registerPayment(id, name, type, value) {
        if (!this.options.types.includes(type)) {
            throw new Error('Invalid type')
        } else if (id.length === 0 || name.length === 0) {
            throw new Error('Must be non empty string')
        } else if (typeof id !== 'string' || typeof name !== 'string') {
            throw new Error('Invalid type')
        } else if (this.payments.map(p => p.id).includes(id)) {
            throw new Error('ID already exists')
        } else if (typeof value !== 'number') {
            throw new Error('Value must be a number')
        } else {
            this.payments.push({
                id: id,
                name: name,
                type: type,
                value: value
            })
        }
        return this.payments
    }

    deletePayment(id) {
        let temp
        try {
            this.payments.forEach(function (p) {
                if (p.id === id) {
                    temp = p
                }
            })
            this.payments = this.payments.filter(function (el) {
                return el.id !== temp.id
            })
            return this.payments
        } catch (e) {
            throw Error('ID not found')
        }
    }

    get(id) {
        let payment
        try {
            this.payments.forEach(function (p) {
                if (p.id === id) {
                    payment = p
                }
            })

            return `Details about payment ID: ${payment.id}\n` +
                `- Name: ${payment.name}\n` +
                `- Type: ${payment.type}\n` +
                `- Value: ${payment.value.toFixed(this.options.precision)}`
        } catch (e) {
            throw Error('ID not found')
        }
    }

    setOptions(options) {
        if (options.types) {
            this.options.types = options.types
        } else if (options.precision) {
            this.options.precision = options.precision
        } else {
            this.options = options
        }
    }

    toString() {
        let payments = 0
        let balance = 0
        for (const index in this.payments) {
            payments++
            balance += this.payments[index].value
        }

        return `Summary:\n` +
            `- Payments: ${payments}\n` +
            `- Balance: ${balance.toFixed(this.options.precision)}`
    }
}

//________________________________________________________________________________

// Initialize processor with default options
const generalPayments = new PaymentProcessor()
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000)
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000)
console.log(generalPayments.toString())

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000)

generalPayments.setOptions({ types: ['product', 'material'] })
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000)
console.log(generalPayments.get('E028'))
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000)

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027')
// Should throw an error (ID not found)
//generalPayments.get('E027')

generalPayments.deletePayment('E028')
console.log(generalPayments.toString())

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({ types: ['service'] })
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000)
servicePyaments.registerPayment('02', 'Discount', 'service', -1500)
console.log(servicePyaments.toString())

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({ precision: 5 })
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153)
console.log(transactionLog.toString())