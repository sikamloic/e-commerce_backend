const { required } = require('@hapi/joi/lib/base')
const mongoose = require('mongoose')


const galerieSchema = new mongoose.Schema(
    {
        coiffeuse: {
           type: mongoose.Types.ObjectId,
           ref: "utilisateurs",
           required: true
        },
        nom: {
            type: String,
            required: true
        }
    },
    {timestamps : true}
)

module.exports = mongoose.model("galerie", galerieSchema)