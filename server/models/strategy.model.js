const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({

    Title:{
        type: String,
        required: [true, "Strat is required"],
        minlength: [3, "Strat must be more than 3 characters."]
    },

    Strat:{
        type: String,
        required: [true, "Strat is required"],
        minlength: [3, "Strat must be more than 3 characters."]
    },

    Agents:{
        type: String,
        default: null
    },

    Maps:{
        type: String,
        default: null
    }
}, { timestamps: true })

module.exports.Strategy = mongoose.model('Strategy', StrategySchema);