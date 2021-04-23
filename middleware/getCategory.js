const Category = require('../models/Category');

module.exports = async function getCategory(req, res, next) {
    let category;
    try {
        category = await Category.findById(req.body.category_id);
        if (!category) {
            return res.status(404).json({ message: 'Cannot find category' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    res.category_id = req.body.category_id;
    next();
}