const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.json(Bread)
})

// INDEX
breads.get('/', (req, res) => {
    res.render('index')
    // res.send(Bread)
})
module.exports = breads