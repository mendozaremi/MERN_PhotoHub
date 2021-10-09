require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS")
    } catch (error) {
        console.error("MongoDB conenction FAIL")
        package.exti(1)
    }
}

module.exports = connectDB;