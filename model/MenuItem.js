const express = require('express')
const { default: mongoose } = require('mongoose')


const MenuItemSchema = new mongoose.Schema({
  
   name:{
     type:String,
     required:true
   },
   item:{
        type:String,
        enum:['fastfood' ,'launch' ,'dinner'],
        required:true
   },

   taste:{
    type:String,
    enum:['spicy','sweet','salty','sour'],
    required:true
   },

   mobile:{
    type:String,
    requird:true,
    unique:true
   }
   
   
})

const MenuItem = mongoose.model("foodItem" ,MenuItemSchema)
module.exports = MenuItem;