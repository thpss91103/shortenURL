const express = require('express')
const shortenURL = require('../../models/shortenURL')
const router = express.Router()
const randonString = require('../../randonString')

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const url = req.body.url
  let string = randonString()
  const shorterLink = req.headers.origin + "/" + string

  function checkString() {
    shortenURL.findOne({ string }).then((result) => {
      if (result) {
        string = randonString()
        checkString()
      }
    })
  }

  checkString()

  shortenURL.findOne({ url }).lean().then((result) => {
    if (result) {
      res.render('index', { url: result.url, shorterLink: result.shorterLink })
      console.log(result)
    } else {
      shortenURL.create({ url, shorterLink, randonString: string })
        .then(() => {
          res.render('index', { url, shorterLink })
        })
        .catch((error) => console.log(error))
        console.log('data created')
    }
  })
})

module.exports = router