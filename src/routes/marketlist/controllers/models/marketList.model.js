const mongoose = require('mongoose');

var objeto = mongoose.model

const marketList = new mongoose.Schema(
    {
        itemName: { type: String, required: true},
        madeBy: String,
        price: Number,
        category: { type: String, required: true},
        status: {
            type: Boolean,
            default: false
          },
        needName: { type: String },
      
    }, {
        timestamps: true
    });

module.exports = objeto('marketList', marketList);