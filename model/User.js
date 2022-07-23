const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  googleId: String,
  garage: [{ ref: 'Garage' }],
})

const User = mongoose.model('User', userSchema)

module.export = User