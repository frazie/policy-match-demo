const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const quotes = require('../controllers/quotes')
const quotesController = require('../controllers/quotes')


router.get('/', homeController.getIndex)
router.get('/quotes', quotesController.setQuotes)
router.post('/available-quotes', quotesController.getQuotes)
router.post('/send-element', quotesController.sendEmail )



module.exports = router