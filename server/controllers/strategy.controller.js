const { Example } = require('../models/strategy.model');

//Find All
module.exports.findAllStrategies = (req, res) => {
    Example.find({})
        .then(allStrategies => res.json(allStrategies))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Create
module.exports.createStrategy = (req, res) => {
    const {  } = req.body;
    Strategy.create({
        
    })
    .then(strategy => res.json(strategy))
    .catch(err => res.status(400).json(err))
}

// Find One
module.exports.getStrategy = (req, res) => {
    Strategy.findOne({_id:req.params.id})
        .then(strategy => res.json(strategy))
        .catch(err => res.json(err))
}

// Update
module.exports.updateStrategy = (req, res) => {
    Strategy.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedStrategy => res.json(updatedStrategy))
        .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteStrategy = (req, res) => {
    Strategy.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}