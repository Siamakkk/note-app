const chalk = require('chalk')
const fs = require("fs")

const saveNote = (notes) => {
    const jsonNotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonNotes)
}

const loadNotes = () => {
  try {
    const buffernotes = fs.readFileSync('notes.json')
    const jsonData = buffernotes.toString()
    return JSON.parse(jsonData)
  } catch(e) {
        return []
  }
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNote = notes.filter((note) =>  note.title===title)
    

    // console.log(duplicateNote.length)
    
    if(duplicateNote.length===0){
        notes.push({
            title: title,
            body: body
        })
    } else {
        console.log('the title has been taken \npick a new one')
    }
    saveNote(notes)
}


const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title!==title)
    saveNote(newNotes)
}

const readNote = (title) => {
    const notes = loadNotes()
    const existingNote = notes.filter((note)=>{
        if(note.title === title){
         console.log(note.body)
        }
    })
    if(existingNote.length===0){
        console.log(chalk.bgRed("ups there isn't such a note !"))
    }    
}

const listNotes = function(){
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log('title: '+chalk.bgWhite.black(note.title)+'\nbody: '+note.body)
    }) 
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNotes:listNotes,
} 
