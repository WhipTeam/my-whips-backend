const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
  cars: [{
    make: String,
    model: String,
    year: Number,
    carName: String,
    engine: String,
    transmission: String,
    HP: Number,
    topSpeed: Number,
    img: String,
    zeroToSixty: String,
    description: String,
  }]
})

const Garage = mongoose.model('Garage', garageSchema)

module.export = Garage