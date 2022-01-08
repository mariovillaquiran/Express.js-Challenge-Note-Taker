const router = require('express').Router();
const store = require ("../db/store");

router.get("/notes",(req,res)=>{
    store
    .get()
    .then((notes)=>{return res.json(notes)})
    .catch((error)=> res.status(500).json(error))
  })

  router.post("/notes",(req,res)=>{
    store
    .add(req.body)
    .then((notes)=>res.json(notes))
    .catch((error)=> res.status(500).json(error))

  })
router.delete("/notes/:id",(req,res)=>{
    store
    .remove(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch((error)=> res.status(500).json(error))

  })

module.exports = router