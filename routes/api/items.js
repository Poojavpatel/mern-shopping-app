/* jshint esversion:6 */
const express = require('express');
const Item = require('../../models/Item.js');

const router = express.Router();

// @/api/items/ | GET req | get all items
router.get('/' ,async (req,res) => {
    const items = await Item.find().sort('name');
    res.send(items);
});

// @/api/items/ | POST req | create an item
router.post('/',async (req,res) => {
    const item = new Item({
        name:req.body.name
    })
    const resitem = await item.save();
    res.send(resitem);
});

// @/api/items/:name | DELETE req | delete an item
router.delete('/:id',async (req,res) => {
    const reqitem = await Item.findByIdAndRemove(req.params.id);
    if(!reqitem){
       return res.status(404).send("This item was not found");
    }
    res.send("sucessfully deleted item");
});

module.exports = router;