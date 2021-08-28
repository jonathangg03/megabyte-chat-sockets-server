const app = require('./app')
const db = require('./db')
const http = require('http')
const socketio = require('socket.io')
const sockets = require('./sockets')

db()

const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

sockets(io)

server.listen(app.get('port'))

console.log(`Server on port ${app.get('port')}`)