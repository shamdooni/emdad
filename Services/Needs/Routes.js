import { Router } from 'express'
import { needsInstance } from './'

export const NeedsRoutes = (apiRoutes) => {
    const NRoutes = Router()
    apiRoutes.use('/needs', NRoutes)

    // Test Routes
    NRoutes.get('/', function(req, res, next)  {
        res.send('initial needs route')
    })

    NRoutes.get('/test', function(req, res, next) {
        needsInstance.testAction(req, res, next)
    })
    // End of test Routes

    NRoutes.post('/', function(req, res, next) {
        needsInstance.postNewNeed(req, res, next)
    })

    NRoutes.get('/all', function(req, res, next) {
        needsInstance.getAllNeeds(req, res, next)
    })
}