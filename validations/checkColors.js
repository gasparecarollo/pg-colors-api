const checkName = (req, res, next) => {
    const name = req.body.name;

    if (name) {
        //next() comes from the parameters
        //next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
        return next()
    } else {

        res.status(400).json({ error: 'Name is required' })
    }

}

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;
    if (typeof fav === 'boolean') {
        next()
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean" })
    }
}


module.exports = { checkName, checkBoolean } 