'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter',
    },
    last_name: {
        type: String,
        Required: 'Please enter',
    },
    email: {
        type: String,
        Required: 'Please enter',
    },
    create_data: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', UserSchema);
