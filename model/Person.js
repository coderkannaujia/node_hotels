const mongoose = require('mongoose');


//Default the person schema

const personSchema = new mongoose.Schema({

 name:{
    type:String,
    required:true
 },
   age:{
    type:Number
   },
   works:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
   },
   mobile:{
    type:String,
    requird:true,
    unique:true
   },
   email:{
    type:String,
    requird:true,
    unique:true
   },
   address:{
    types:String
   },
   salary:{
    type:Number,
    required:true
   }
})



const Person = mongoose.model('person' ,personSchema);
module.exports = Person;