const Author = require('../models/Author');

module.exports = async function getAuthor(req, res, next) {
    let author;
    try {
        author = await Author.findById(req.body.author_id);
        if (!author) {
            return res.status(404).json({ message: 'Cannot find author' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    res.author_id = req.body.author_id;
    next();
}