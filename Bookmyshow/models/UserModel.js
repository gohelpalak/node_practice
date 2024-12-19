const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
