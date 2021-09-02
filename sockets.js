const Message = require('./models/message')
const moment = require('moment')

module.exports = (io) => {
  io.on('connection', async (socket) => {
    // console.log('New user connected')

    let allMessages = await Message.find()
    let chatMessages = []
    // socket.emit('getAllMessage', allMessages)

    socket.on('chatId', async (data) => {
      chatMessages = await Message.find({ chat: data })
      io.sockets.emit('chatId', chatMessages)
    })

    // socket.on('sendMessage', (data) => {
    //   const newMessage = new Message({
    //     user: data.user,
    //     content: data.content,
    //     date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    //     chat: data.chat
    //   })

    //   io.sockets.emit('newMessage', newMessage)
    //   newMessage.save().then(async (data) => {
    //     chatMessages = await Message.find({ chat: data.chat })
    //     io.sockets.emit('addedMessage', chatMessages)
    //   })
    // })

    socket.on('disconnect', () => {
      // console.log('Disconnected user')
    })
  })
}
