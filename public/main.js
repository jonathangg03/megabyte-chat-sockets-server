const socket = io.connect()

socket.on('getAllMessage', data => {
  console.log(data)
})