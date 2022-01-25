const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        role : {
            type : String,
            required: true,
        },
        nom : {
            type : String,
            required : true,
            max : 255,
        },
        prenom : {
            type : String,
            required : true,
            max : 255,
        },
        numero : {
            type : Number,
            required : true,
        },
        ville : {
            type : String,
            required : true,
            max : 255,
        },
        email : {
            type : String,
            required : true,
            max : 255,
        },
        pwd : {
            type : String,
            required : true,
        },
    },
    {timestamps : true}
)

module.exports = mongoose.model("utilisateurs", userSchema)