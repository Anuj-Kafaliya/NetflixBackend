const mongoose = require('mongoose');
const {constant} = require('../lib')
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean
    }
}, {timestamps: true});

module.exports = mongoose.model(constant.modelName.UserModel, userSchema);