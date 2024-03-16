const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./model/Person");

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





app.listen(3000, () => {
  console.log("sever stated at port no : 3000");
});

