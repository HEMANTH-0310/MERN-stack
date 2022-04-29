const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email_id: {
        required: true,
        type: String
    },
    contact_number: {
        required: true,
        type: Number
    },
    age: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('Data', dataSchema)

