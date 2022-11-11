const mongoose = require('mongoose')

const userModelSchema =  new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    surname: {
        type : String,
        required : true
    },
    username: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    dob: {
        type : Date,
        required : true
    }
})

module.exports = mongoose.model('users', userModelSchema )