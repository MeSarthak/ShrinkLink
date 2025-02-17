const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    }, 
    redirectURL: {
        type: String,
        required: true,
    },
    visitedHistory: [{timestamp: {type: Number}}],
    },
    {timestamps: true},
);

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;