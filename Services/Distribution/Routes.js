import { Router } from 'express'
import { distributionInstance } from './'

export const DistributionRoutes = (apiRoutes) => {
    const DRoutes = Router()
    apiRoutes.use('/dis', DRoutes)


    DRoutes.post('/', function(req, res, next) {
        distributionInstance.postNewDis(req, res, next)
    })

    DRoutes.get('/all', function(req, res, next) {
        distributionInstance.getAllDistribution(req, res, next)
    })
}