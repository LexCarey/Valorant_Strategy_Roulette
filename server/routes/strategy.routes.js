const StrategyController = require('../controllers/strategy.controller');

module.exports = function(app){
    app.get('/api/strategies', StrategyController.findAllStrategies)
    app.get('/api/strategies/:id', StrategyController.getStrategy)
    app.post('/api/strategies', StrategyController.createStrategy)
    app.put('/api/strategies/:id', StrategyController.updateStrategy)
    app.delete('/api/strategies/:id', StrategyController.deleteStrategy)
}