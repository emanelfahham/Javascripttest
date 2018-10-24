let mongoose = require('mongoose');

// User schema

const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    passwrod: {
        type: String,
    }
});

const User = module.exports = mongoose.model('User', userSchema);