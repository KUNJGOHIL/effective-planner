require('dotenv').config();
const mongoose = require('mongoose');

const dbConnection = async () => {
    const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
    try {
        await mongoose.connect(MONGO_CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        throw new Error("Database initialization error");
    }
};

module.exports = dbConnection;