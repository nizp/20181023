const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name:String,
    id:Number,
    sex:String
});
