const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const quotesController = require('../controllers/quotes')


router.get('/', homeController.getIndex)
router.get('/quotes', quotesController.getQuotes)



module.exports = router