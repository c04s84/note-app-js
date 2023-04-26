const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const noteUtils = require('./utils.js')
// const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title:{
            describe: "note title to add",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "note body to add",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        noteUtils.addNote(argv.title, argv.body)
        // console.log("this is the sudo function for adding note")
        console.log("Adding Note Title: ", argv.title)
        console.log("Adding Note Body: ", argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing existing note',
    builder: {
        title:{
            describe: "note title to remove",
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        noteUtils.removeNote(argv.title)
        // console.log("this is the sudo function for removing note")
        // console.log("Removing Note Title: ", argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "listing the note",
    handler(){
        noteUtils.listNote()
        console.log("This is the sudo function for listing note")
    }
})

yargs.command({
    command:"read",
    describe: "read note",
    builder: {
        title: {
            describe: "reading note content by title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteUtils.readNote(argv.title)
        // console.log(argv.title)
        console.log("This is the sudo function for reading note")
    }
})
    
// console.log(yargs.argv)
yargs.parse()

 