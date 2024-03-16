const mongoose = require("mongoose");

// const mongoURL = "mongodb://127.0.0.1:27017/hotel";


 const db = mongoose.connect('mongodb://127.0.0.1:27017/hotel')
  .then(() => console.log('Connected!'));



module.exports = db;
