const express = require('express')
const libraryModel = require('../Schema/LibrarySchema')
const Router = express.Router()

Router.get('/',(req,res)=>{
    res.send("library")
})

Router.post('/',async(req,res)=>{
    const data = req.body
    try {
        const res = await libraryModel.create(data)
        res.json(res)
    } catch (error) {
        res.send(error)
    }
})

module.exports = Router