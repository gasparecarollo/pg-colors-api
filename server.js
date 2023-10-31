const app = require('./app');

//Gives us access to our environment variables inb .env file
require('dotenv').config();
const PORT = process.env.PORT || 5555


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});


