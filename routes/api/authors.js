const express = require('express');
const router = express.Router();

const Author = require('../../models/Author');

router.post('/', async (req, res) => {
    try {
        const author = new Author({
            name: req.body.name
        });

        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;