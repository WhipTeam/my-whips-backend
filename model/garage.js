const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const garageSchema = new Schema ({
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