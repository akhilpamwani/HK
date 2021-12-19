// Importing statements

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Creating Schema
  const Contact = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    addressp: { type: String, required: true },
    city: { type: String, required: true },
    zip:{ type: String, required: true },



})

// Creting Model
  const ContactModel = mongoose.model('Contact', Contact)
module.exports=ContactModel