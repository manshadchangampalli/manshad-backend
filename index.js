const express = require("express");
const Projects = require("./Router/projects")
const library = require("./Router/library")
const con = require("./Connection/connect");
const { json } = require("express/lib/response");
const { urlencoded } = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
//middle wares
app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/projects',Projects)
app.use('/api/library',library)


app.listen(port,()=>{
    console.log("server added 3001");
})