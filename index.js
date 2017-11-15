import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { databaseUrl } from './Config'
import Router from './Services/routes'

const app = express()

mongoose.connect(databaseUrl)

app.listen(process.env.PORT | 8080)
console.log(`app is listen on port 8080`)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
Router(app)