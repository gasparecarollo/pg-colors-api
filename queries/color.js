const db = require('../db/dbConfig')

const getAllColors = async () => {

    try {
        const allColors = await db.any("SELECT * FROM colors");
        return allColors
    } catch (error) {
        return error
    }
}

const getColor = async (id) => {
    try {
        const oneColor = await db.one("SELECT * FROM colors WHERE id=$1", id); //$1 is the first value
        return oneColor
    } catch (error) {
        return error
    }
}
//Insert into colors (name, is_favorite) VALUES ('Red', true)
const createColor = async (color) => {
    try {
        const newColor = await db.one("INSERT INTO colors (name, is_favorite) VALUES($1, $2) RETURNING *",
            [color.name, color.is_favorite]
        )
        return newColor
    } catch (error) {

        return error
    }
}

const deleteColor = async (id) => {
    try {

        const deletedColor = await db.one("DELETE FROM colors WHERE id=$1 RETURNING *", id);

        return deletedColor;

    } catch (error) {

        return error
    }

}

module.exports = { getAllColors, getColor, createColor, deleteColor }