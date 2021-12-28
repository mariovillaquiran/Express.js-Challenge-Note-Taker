const express = require('express');
const apiroute = require ("./routes/apiroute")
const htmlroute = require ("./routes/htmlroutes")
const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api", apiroute)
app.use("/", htmlroute)
app.listen(PORT,() => console.log(PORT))