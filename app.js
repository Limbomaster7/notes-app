const notes = require("./notes")
const chalk = require("chalk")
const yargs = require("yargs")


yargs.version("1.0.0")

// Create add command 

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note content",
            demandOption: true,
            type: "string"
        },

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)  
    }
})



// Create remove command

yargs.command( {
    command: "remove",
    describe: "remove a note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.removeNote(argv.title)  
    }
})

yargs.command({
    command: "list",
    describe: "List notes",
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



yargs.parse()
