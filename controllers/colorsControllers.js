const express = require('express');
const colors = express.Router();
const { getAllColors, getColor, createColor, deleteColor } = require('../queries/color');
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

colors.delete("/:id", async (req, res) => {
    //Destructure id out of req.params
    const { id } = req.params   //const id = req.params.id;
    // Use if as the argument for our deleteColor function call, and assign the return value to deletedColor
    //We check if the object has the key of id, and if it does then we have a successful call, and we can send back a successful status
    const deletedColor = await deleteColor(id);

    if (deletedColor.id) {
        res.status(200).json(deletedColor)
    } else {
        res.status(404).json({ error: "Color not found" })
    }
})


module.exports = colors;