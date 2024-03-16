const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const PORT = process.env.PORT || 3000


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("welcome to my channel");
});



//Import the router files
const personRoutes  = require('./routes/personRoutes');
const menuItemRoutes  = require('./routes/menuItemRoutes');

// use the router
app.use('/person' ,personRoutes)
app.use('/menuItem' ,menuItemRoutes)





app.listen(PORT, () => {
  console.log("sever stated at port no : 3000");
});

