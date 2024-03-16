const mongoose = require("mongoose");
require('dotenv').config();


 //Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;


// Set up MongoDB connection 
const db =  mongoose.connect(mongoURL)
  .then(() => console.log('Connected!'));


// Set up MongoDB connection 
//  mongoose.connect(mongoURL)


//  const db = mongoose.connection;

//  db.on('connected' ,()=>{
//   console.log('Connected to MongoDB server');
//  })


module.exports = db;
