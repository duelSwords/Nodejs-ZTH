const express = require('express');
const planetsRouter = express.Router();
const { httpGetAllPlanets } = require('./planets.controller');

// The app router is using a root pathway '/planets'
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;
