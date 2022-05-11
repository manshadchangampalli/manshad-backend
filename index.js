const express = require("express");
const Projects = require("./Router/Projects")
const app = express()

app.use('/api/projects',Projects)

app.listen(3001,()=>{
    console.log("server added 3001");
})