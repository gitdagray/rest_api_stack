const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');

router.post('/', async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name
        });

        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;