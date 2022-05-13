const mongoose = require("mongoose")


const projectSchema = mongoose.Schema(
    {
    title:"String",
    image:"String",
    link:"String",
    description:"String"
    },
    {
        timestamps:true
    }
)

const projectModal = mongoose.model('projects',projectSchema)

module.exports = projectModal