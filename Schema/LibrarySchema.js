const mongoose= require("mongoose");

const schema = mongoose.Schema(
    {
        html:"String",
        css:"String",
        js:"String",
        name:"String"
    },
    {
        timestamps:true
    }
)

const libraryModel = mongoose.model('library',schema)

module.exports = libraryModel