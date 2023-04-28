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
    }
})

yargs.command({
    command: "list",
    describe: "listing the note",
    handler(){
        noteUtils.listNote()
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
    }
})
    
// console.log(yargs.argv)
yargs.parse()

 