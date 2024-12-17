const express = require('express');
const app = express();
const port = 2344;
const path = require('path');
const dbConnect = require('./config/dbconnection')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());


app.use('/movie',require('./routes/movieRoutes'));
app.use('/', (req, res) => {
    return res.render('index');
})
app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
})