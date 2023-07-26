const mongoose = require('mongoose');
const mongoURI='mongodb+srv://FoodExpress:jkhGUbSTNXQRwyDo@cluster0.cpx0kdu.mongodb.net/FoodExpressDB?retryWrites=true&w=majority' 
//add the db name before ? in the mongo uri-------------important
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_items");
    //toArray returns a promise which can be resolved with a await
    let data=await fetched_data.find({}).toArray() 
    console.log(data);
  } catch (error) {
    console.log('err: ', error);
  }
};



module.exports= mongoDB;