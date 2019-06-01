var mongoose = require('mongoose')

var bscisSchema = new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
})

var BscIs = mongoose.model('BscCI', bscisSchema)
module.exports = BscIs
