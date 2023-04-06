const express = require('express')
const router = express.Router()
const randonString = require('../../randonString')

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const url = req.body.url
  const string = randonString()
  console.log(url)
  console.log(string)
})

module.exports = router