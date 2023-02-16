const express = require('express')

const messagesController = require('../controllers/messages.controller')

const messagesRouter = express.Router()

//Route relative path /messages
messagesRouter.get('/', messagesController.getMessages)
messagesRouter.get('/two', messagesController.getMessages2)
messagesRouter.get('/', messagesController.postMessage)

module.exports = messagesRouter