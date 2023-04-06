const express = require('express')
const shortenURL = require('../../models/shortenURL')
const router = express.Router()
const randonString = require('../../randonString')

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const url = req.body.url
  const String = randonString()
  let shorterLink = req.headers.origin + "/" + String

  let data = shortenURL.find({ url }).lean()
  if (!data) {
    shortenURL.create({ url, shorterLink })
    console.log('created')
  }
  console.log('created')
  return res.render('index', { url, shorterLink })

    
})

module.exports = router