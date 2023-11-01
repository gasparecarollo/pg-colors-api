const express = require('express');
const colors = express.Router();
const { getAllColors, getColor, createColor } = require('../queries/color');
const { checkName, checkBoolean } = require('../validations/checkColors');


//Get all the colors
//localhost:4005/colors/
colors.get("/", async (req, res) => {
    const allColors = await getAllColors();
    if (allColors[0]) {
        res.status(200).json(allColors)
    } else {
        res.status(500).json({ error: "server error" })
    }
});
//Get one color
//localhost:5555/colors/:id
colors.get("/:id", async (req, res) => {
    //const {id} = req.params;
    const id = req.params.id;
    const oneColor = await getColor(id);
    if (oneColor) {
        res.status(200).json(oneColor)
    } else {
        res.status(404).json({ error: 'Not Found' })
    }
})

//Post a new color
//localhost:4005/colors/
colors.post("/", checkName, checkBoolean, async (req, res) => {
    const body = req.body;
    const color = await createColor(body)

    res.json(color)
})

module.exports = colors;