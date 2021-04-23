const mongoose = require('mongoose');

const connectDB = async (db) => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;