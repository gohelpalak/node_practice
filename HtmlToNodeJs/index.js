const express = require('express');
const port = 1111;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
// app.set("views", path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));

const tabel = (req, res, next) => {
    if (req.query.name >= 'test') {
        next();
    } else {
        return res.redirect('/');
    }
}
const profile = (req, res, next) => {
    if (req.query.pass < 123) {
        next();
    } else {
        return res.redirect('/');
    }
}

// app.use(validate);       // application level




app.get('/', (req, res) => {
    return res.render('index');
})
app.get('/profile', profile, (req, res) => {
    return res.render('profilepage');
})
app.get('/tabel', tabel, (req, res) => {
    return res.render('tabel');
})

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
})
