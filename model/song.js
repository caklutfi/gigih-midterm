const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        reqired: true,
        type: String
    },
    artist: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Song', songSchema)