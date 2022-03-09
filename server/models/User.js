const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({

firstName: {
    type: String,
    require: true
},
lastName: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true,
    unique: true
},
phoneNumber: {
    type: String
},
password: {
    type: String,
    require: true
}





})

const User = mongoose.model('User', userSchema)

module.exports = User