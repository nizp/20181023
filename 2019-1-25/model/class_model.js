const mongoose = require('mongoose');
const ClassInfo = require('../schema/class');

module.exports = mongoose.model('ClassInfo',ClassInfo);