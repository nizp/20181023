const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    zw : String,
    gs : String,
    xz : String,
    gz : String,
    dd : String,
    jy : String,
    xl : String,
    rs : String,
    dy : String,
    sj : Array,
    lx : String,
    info:Array
});
module.exports = mongoose.model('sh', schema);
