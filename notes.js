const fs = require("fs")
const chalk = require("chalk")



const addNote = function(title, body) {

    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.filter(note => note.title === title)
    // const notesToKeep = notes.filter(note => note.title !== title)

    if (targetNote.length !== 0) {
        const index = notes.findIndex( note => note.title === title)

        notes.splice(index,1)

        saveNotes(notes)
        console.log(chalk.green.inverse("Note removed!"))
    }  else {
        console.log(chalk.red.inverse("Note does not exist!"))
    }
}


const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse("Your notes"))
    notes.forEach( note => console.log(`Title: ${note.title}, Body: ${note.body}`))
}

const readNote = (title) => {
    const notes = loadNotes()
    
    const note = notes.find(note=>note.title === title)

    if (note) {
        console.log(chalk.green.inverse(`Title: ${note.title}, Body: ${note.body}`))
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
    
    
    
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync("notes.json", dataJSON)


}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}

