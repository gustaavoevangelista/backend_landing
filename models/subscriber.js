const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)