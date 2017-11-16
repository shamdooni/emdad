import { Router } from 'express'
import { campsInstance } from './'

export const CampsRoutes = (apiRoutes) => {
    const CRoutes = Router()
    apiRoutes.use('/camps', CRoutes)


    CRoutes.post('/', function(req, res, next) {
        campsInstance.postNewCamp(req, res, next)
    })

    CRoutes.get('/all', function(req, res, next) {
        campsInstance.getAllDistribution(req, res, next)
    })
}