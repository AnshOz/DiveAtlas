const mongoose = require('mongoose')

const Schema = mongoose.Schema

const regionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Region', regionSchema)
