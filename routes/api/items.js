/* jshint esversion:6 */
const express = require('express');
const Item = require('../../models/Item.js');

const router = express.Router();

// @/api/items/  GET req
router.get('/' ,(req,res) => {
    const items = Item.find()
                        .sort()
                        .then( item => res.json(item));
});

module.exports = router;