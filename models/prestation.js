const mongoose = require('mongoose')


const prestationSchema = new mongoose.Schema(
    {
        coiffeuse: {
            type: mongoose.Types.ObjectId,
            ref: "utilisateurs",
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        }
    },
    {timestamps : true}
)

module.exports = mongoose.model("prestation", prestationSchema)