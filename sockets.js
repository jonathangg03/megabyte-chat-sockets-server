const Message = require('./models/message')
const moment = require('moment')

module.exports = io => {
  io.on('connection', async (socket) => {
    console.log('New user connected')

    let allMessages = await Message.find()
    let chatMessages = []
    socket.emit('getAllMessage', allMessages)

    socket.on('chatId', async (data) => {
      chatMessages = await Message.find({ chat: data })
      socket.emit('chatId', chatMessages)
    })

    socket.on('sendMessage', async (data) => {
      const newMessage = new Message({
        user: data.user,
        content: data.content,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        chat: data.chat
      })

      newMessage.save().then(data => 'Mensaje enviado')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected user')
    })
  })
}