/* jshint esversion:6 */
const express = require('express');
const Item = require('../../models/Item.js');

const router = express.Router();

// @/api/items/  GET req
router.get('/' ,async (req,res) => {
    const items = await Item.find().sort('name');
    res.send(items);
});

module.exports = router;