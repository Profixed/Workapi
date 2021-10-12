const mongoose = require('mongoose');

var objeto = mongoose.model

const item = new mongoose.Schema(
    {
        itemName: String,
        madeBy: String,
        price: Number,
        status: Boolean,
        author: { type: String },
        content: { type: String, required: true},
        content: { type: String, required: true},
      
    }, {
        timestamps: true
    });

module.exports = objeto('item', item);