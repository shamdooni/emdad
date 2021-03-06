import { Router } from 'express'
import { NeedsRoutes } from './Needs'
import { DistributionRoutes } from './Distribution'
import { CampsRoutes } from './Camps'

export default (app) => {
    const apiRoutes = Router()
    app.use('/api', apiRoutes)

    apiRoutes.get('/', (req, res, next) => {res.send('first route works!')})
    NeedsRoutes(apiRoutes)
    DistributionRoutes(apiRoutes)
    CampsRoutes(apiRoutes)
}