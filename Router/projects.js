const express = require("express")
const Router = express.Router()
const projectModal = require("../Schema/ProjectSchema")

Router.get("/",async(req,res)=>{
    try {
        const data = await projectModal.find()
        res.json(data)
    } catch (error) {
        
    }
})

Router.post("/",async(req,res)=>{
    const data = req.body
    try {
        const response = await projectModal.create(data)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports =  Router