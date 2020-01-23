const notes = require('./note');
const yargs = require('yargs');



yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'pick a title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'write down your note',
            demandOption: true,
            type:'string'
        }
    },
    handler : (argv) => notes.addNote(argv.title, argv.body)
});

yargs.command({
    command:'remove',
    builder:{
        title:{
            describe:'add the name of note you wanna delete',
            demandOption:true,
            type:'string'
            }
        },
    describe:'remove a note',
    handler:(argv) => notes.removeNote(argv.title)
})



yargs.command({
    command:'list',
    describe:'list all notes',
    
    handler:() => notes.listNotes()
});

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'name the note you wanna read',
            demandOption:true,
            type:'string',
        }
    },
    handler:(argv) => notes.readNote(argv.title)
    
});


 yargs.parse();


