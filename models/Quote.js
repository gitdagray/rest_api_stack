const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('quote', QuoteSchema);