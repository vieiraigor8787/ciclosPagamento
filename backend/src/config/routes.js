const express = require('express');

module.exports = function(server) {
    const router = express.Router()
    //prefixo de todas as rotas
    server.use('/api', router)

    // rotas de ciclo de pagamento
    const BillingCycle  = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}