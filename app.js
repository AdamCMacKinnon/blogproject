const express = require('express');
const app = express();
let db = require('./models');

//set view engine
app.set('view engine', 'ejs');

//static folder
app.use(express.static('public'))

//routes
// app.use(require('./routes/index'))


app.listen (5000, () => {
    console.log('Server is running on port 5000');
})