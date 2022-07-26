const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    googleId: String,
    garage: [{ref: 'Garage'}],
})