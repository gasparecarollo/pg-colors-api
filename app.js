//Import express and initialize an instance of the express server

const express = require('express');
const app = express();
const colorsController = require("./controllers/colorsControllers");

//Import cors
const cors = require('cors');


//middleware

app.use(cors());
app.use(express.json());
app.use("/colors", colorsController)

//routes

app.get('/', (req, res) => {

    res.send("Welcome to the Colors App!")

});



module.exports = app;