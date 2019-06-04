var mongoose = require('mongoose')

var bsccsSchema = new mongoose.Schema({
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

var BscCs = mongoose.model('BscCs', bsccsSchema)
module.exports = BscCs
