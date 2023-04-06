function sample(collection) {
  let index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function randonString() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  let collection = []
  let string = ''

  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  
  for (let i = 1; i <= 5; i++) {
    string += sample(collection)
  }
  
  return string
}

module.exports = randonString