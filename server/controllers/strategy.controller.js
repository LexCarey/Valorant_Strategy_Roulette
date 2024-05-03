const { Strategy } = require('../models/strategy.model');

//Find All
module.exports.findAllStrategies = (req, res) => {
    Strategy.find()
        .then(allStrategies => res.json(allStrategies))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Find One
module.exports.getStrategy = (req, res) => {
    Strategy.findOne({_id:req.params.id})
        .then(strategy => res.json(strategy))
        .catch(err => res.json(err))
}

// Create
module.exports.createStrategy = (req, res) => {
    const { title, strat, agents, maps } = req.body;
    Strategy.create({
        title,
        strat,
        agents,
        maps
    })
    .then(strategy => res.json(strategy))
    .catch(err => res.status(400).json(err))
}

// Update
module.exports.updateStrategy = (req, res) => {
    Strategy.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then(updatedStrategy => res.json(updatedStrategy))
        .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteStrategy = (req, res) => {
    Strategy.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

// Find By Agent and Map
module.exports.findStrategyByAgentAndMap = (req, res) => {
    let agentsVar = []
    let tempString = ""
    for (i in req.params.agents) {
        if (req.params.agents[i] == " ") {
            agentsVar.push(tempString)
            tempString = ""
        }else {
            tempString += req.params.agents[i]
        }
    }
    agentsVar.push(tempString)
    tempString = ""

    let mapsVar = []
    tempString = ""
    for (i in req.params.maps) {
        if (req.params.maps[i] == " ") {
            mapsVar.push(tempString)
            tempString = ""
        }else {
            tempString += req.params.maps[i]
        }
    }
    mapsVar.push(tempString)

    Strategy.find({agents: { $all: agentsVar }, maps: { $all: mapsVar }})
    .then(strategy => res.json(strategy))
    .catch(err => res.json(err))
}

module.exports.randomStrategy = (req, res)=>{
    Strategy.aggregate([{ $sample: { size: 1 } }])
        .then(strategy=>res.json(strategy))
        .catch(err=>res.status(400).json(err))
}