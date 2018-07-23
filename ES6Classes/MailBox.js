class MailBox {
    constructor() {
        this.msg = new Map()
    }

    addMessage(subject, text) {
        this.msg.set(subject, text)

        return this.msg
    }

    deleteAllMessages() {
        return this.msg.clear()
    }

    findBySubject(substr) {
        let output = []
        for (const [subject, text] of this.msg.entries()) {
            if (this.msg.has(subject) && subject.indexOf(substr) !== -1) {
                output.push({ [subject]: text })
            }
        }
        return output
    }

    get messageCount() {
        return this.msg.size
    }

    toString() {
        if (!this.msg.size) {
            return ` * (empty mailbox)`
        }

        let output = ''
        for (const [subject, text] of this.msg.entries()) {
            if (this.msg.has(subject)) {
                output += ` * [${subject}] ${text}\n`
            }
        }
        return output
    }
}

//_______________________________________________________________

let mb = new MailBox()
console.log("Msg count: " + mb.messageCount)
console.log('Messages:\n' + mb)
mb.addMessage("meeting", "Let's meet at 17/11")
mb.addMessage("beer", "Wanna drink beer tomorrow?")
mb.addMessage("question", "How to solve this problem?")
mb.addMessage("Sofia next week", "I am in Sofia next week.")
console.log("Msg count: " + mb.messageCount)
console.log('Messages:\n' + mb)

console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

console.log("Messages holding 'que': " +
    JSON.stringify(mb.findBySubject('que')));

mb.deleteAllMessages()
console.log("Msg count: " + mb.messageCount)
console.log('Messages:\n' + mb)

/*console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());*/