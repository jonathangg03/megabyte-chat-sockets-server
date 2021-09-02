;(async () => {
  const mongoose = require('mongoose')
  const { dbUri } = require('./config')

  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
})()
