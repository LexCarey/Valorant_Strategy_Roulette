const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true, "Strategy title is required"],
        minlength: [2, "Strategy title must be more than 2 characters."]
    },

    strat:{
        type: String,
        required: [true, "Strat is required"],
        minlength: [3, "Strat must be more than 3 characters."]
    },

    agents:[{
        type: String,
        default: null
    }],

    maps:[{
        type: String,
        default: null
    }]
}, { timestamps: true })

module.exports.Strategy = mongoose.model('Strategy', StrategySchema);