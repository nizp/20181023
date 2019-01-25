const mongoose = require('mongoose');

const Animal = new mongoose.Schema({
    type:String,
    name:String
});

module.exports = Animal;