function sample(words) {
  const index = Math.floor(Math.random() * words.length)
  return words[index]
}

function randonString() {
  const words = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let string = ''

  for (let i = 0; i < 5; i++) {
    string += sample(words)
  }
  
  return string
}

module.exports = randonString