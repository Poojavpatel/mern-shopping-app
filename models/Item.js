/* jshint esversion:6 */
const mongoose = require('mongoose');

// creating schema for items
const ItemSchema = new mongoose.Schema({
    name:{ type:String, require:true },
    date:{ type:Date, default:Date.now }
});

// mapping schema to a model
const Item = mongoose.model('Item',ItemSchema);

module.exports = Item;