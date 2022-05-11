const express = require("express")
const Router = express.Router()

Router.get("/",(req,res)=>{
    res.json("hello")
})




module.exports =  Router