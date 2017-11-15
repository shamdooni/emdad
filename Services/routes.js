import { Router } from 'express'
import { NeedsRoutes } from './Needs'

export default (app) => {
    const apiRoutes = Router()
    app.use('/api', apiRoutes)

    apiRoutes.get('/', (req, res, next) => {res.send('first route works!')})
    NeedsRoutes(apiRoutes)
}