const mongoose = require('mongoose');

const Foods = new mongoose.Schema({
    foods_id:{type: String, required: true, unique: true},
    name:{type: String, required: true},
    quantity:{type: Number, required: true},
    price:{type: Number, required: true},
    description:{type: String, required: false}
});

module.exports = mongoose.model('Foods', Foods);