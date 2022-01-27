const mongoose = require('mongoose')


const planningSchema = new mongoose.Schema(
    {
        coiffeuse: {
            type: mongoose.Types.ObjectId,
            ref: "utilisateurs",
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        horaire: {
            type: Number,
            required: true
        }
    },
    {timestamps : true}
)

module.exports = mongoose.model("planning", planningSchema)