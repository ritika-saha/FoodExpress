const mongoose = require('mongoose');
const mongoURI='mongodb+srv://FoodExpress:jkhGUbSTNXQRwyDo@cluster0.cpx0kdu.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to the db');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  };
  

module.exports= mongoDB;