const router = require('express').Router();
const store = require ("../db/store");

router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"))  
  })
router.post("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"))  
  }
router.delete("/notes",(req,res)=>{
    res.removeFile(path.join(__dirname,"../public/notes.html"))  
  })

modules.export = router