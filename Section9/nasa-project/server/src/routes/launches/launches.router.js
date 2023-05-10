const express = require('express')
const launchesRouter = express.Router()
const { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller')

// launchesRouter.get('/launches', httpGetAllLaunches)
// launchesRouter.post('/launches', httpAddNewLaunch)

// The app router is using a root pathway '/launches'
launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)
launchesRouter.delete('/:id', httpAbortLaunch)

module.exports = launchesRouter