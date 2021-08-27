const Message = require('./models/message')

module.exports = io => {
  io.on('connection', () => {
    console.log('New user connected')
  })
}