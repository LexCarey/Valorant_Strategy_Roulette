const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({
    type: String,
    required: [
        true,
        "Atrribute is required"
    ],
	minlength: [
            3,
            "Name must be more than 3 characters."
        ]
}, { timestamps: true })

module.exports.Strategy = mongoose.model('Strategy', StrategySchema);