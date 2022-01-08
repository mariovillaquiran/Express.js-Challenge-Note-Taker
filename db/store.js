const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const readfileasync = util.promisify(fs.readFile);
const writefileasync = util.promisify(fs.writeFile);
class Store{
read(){
    return readfileasync("db/db.json","utf-8")
}
write(note){
    return writefileasync("db/db.json",JSON.stringify(note))
}

get(){
    return this.read().then((notes)=>{
        let notesparsed;
    try {
        notesparsed = [].concat(JSON.parse(notes))
    } catch (error) {
        notesparsed = []
    }
    return notesparsed
    })
}
add(note){ 
    const {title,text} = note
    if (!title || !text) {
    throw new Error("Must include title and text")    
    }
const newnote = {title,text,id: uuidv4()} 
return this.get()
.then((notes)=>[...notes,newnote])
.then((updatednotes)=> this.write(updatednotes))
.then(()=>newnote)
}
remove(id){
return this.get()
.then((notes)=> notes.filter((note)=>note.id !==id))
.then((notesfiltered)=> this.write(notesfiltered))
}

}
module.exports = new Store()