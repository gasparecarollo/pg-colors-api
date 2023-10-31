const express = require('express');
const colors = express.Router();
const { getAllColors } = require('../queries/color');

//Get all the colors
colors.get("/", async (req, res) => {
    const allColors = await getAllColors();
    res.json(allColors);
    // res.json({ status: ok })
});



module.exports = colors;