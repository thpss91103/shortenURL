const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router