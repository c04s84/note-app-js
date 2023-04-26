const fs = require("fs")
const chalk = require("chalk")

// const getNotes = function(str){
//     console.log("the input str is %s", str)
//     return str
// }

const getNotes = (str) => {
    console.log("the input str is %s", str)
    return str
}

const addNote = (title, body) => {

    console.log("hello from utils addNotes")
    const notes = loadNotes()
    console.log("this is the note loaded: %s", notes)

    // const duplicateTitle = notes.filter(duplicateData(notes, title, body))
    const duplicateData = notes.find((note) => note.title === title)

    // const duplicateTitle = notes.filter(function(note){
        // return note.title === title

    // })

    console.log("duplicateData:", duplicateData)

    if (!duplicateData){
        notes.push({
            title: title,
            body: body
        })
        console.log("push data success!")
        console.log(chalk.bgGreen("New note added!"))
        saveNote(notes)
        
    }else{
        console.log(chalk.bgRed("note title has been taken!"))
    }


}

const removeNote = (title) => {
    console.log("note title to be removed: ", title)
    const notes = loadNotes()
    console.log("note loaded successfully: %s", notes)
    const removedData = notes.filter((note, idx, arr) => note.title != title)
    console.log("removedData: ", removedData.length)

    if (removedData.length != notes.length){
        console.log(
            "data removed successfully!\
            old data length: %d,\
            new data length:%d", notes.length, removedData.length
        )
        saveNote(removedData) 
        console.log(chalk.bgGreen("Note removed!"))
    }else{
        console.log(chalk.bgRed("No note found!"))
    }
}

const listNote = () => {
    const notes = loadNotes()

    if (notes.length === 0){
        console.log("You have no note!")
    }else{
        console.log(chalk.bgYellow("Your Notes"))
        notes.forEach(element => {
            console.log(chalk.bgYellow("Title: ", element.title))
        });

    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((notes) => notes.title === title)

    if (!findNote){
        console.log(chalk.bgRed("No Note Found!"))
    }else{
        console.log(chalk.bgGreen("Title: ", findNote.title))
        console.log(chalk.inverse("Body: ", findNote.body))
    }

}

const saveNote = (noteData) => {
    const stringedData = JSON.stringify(noteData)
    fs.writeFileSync("./notes.json", stringedData)
    console.log("save data success!")

}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("./notes.json")
        const dataString = dataBuffer.toString()
        console.log("load notes success!")
        return JSON.parse(dataString)
    }catch(e){
        console.log("notes not found!")
        return[]
    }





}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}



// getNotes("hello")