const mongoose = require('mongoose');

// create a new schema
const schema = new mongoose.Schema({
    title: { type: String, required: [true, 'A title name is required']},
    fullname: { type: String },
    email: { type: String },
    date: { type: String },
    time: { type: String }
});

module.exports = mongoose.model('tasks', schema);