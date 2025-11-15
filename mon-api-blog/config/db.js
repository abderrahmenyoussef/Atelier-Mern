const mangoose = require('mongoose');

const connectDB = async () => {
    try {
        await mangoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');}
    catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }  } 

module.exports = connectDB;    