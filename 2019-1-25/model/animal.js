const mongoose = require('mongoose');
const Animal = require('../schema/animal');
module.exports = mongoose.model('Animal',Animal);
