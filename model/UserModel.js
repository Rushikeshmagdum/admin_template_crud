const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
     firstName: String,
     lastName: String,
     email: {type: String, unique: true, sparse: true},
     contact: {type: String, unique: true, sparse: true},
     password: String
});

module.exports = mongoose.model('users', UserSchema)