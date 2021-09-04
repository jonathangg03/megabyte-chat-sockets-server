const app = require('./app')
require('./db')
const http = require('http')
const socketio = require('socket.io')
const sockets = require('./sockets')

const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin:
      'https://megabyte-chat.vercel.app/user/60deee1a52fcef7e24e355a0/60e14cffbd6b1f82bc175360',
    methods: ['GET', 'POST']
  }
})

sockets(io)

server.listen(app.get('port'))

console.log(`Server on port ${app.get('port')}`)
