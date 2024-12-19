const express = require('express');
const path = require('path');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const multer = require('multer');

const app = express();
const port = 2030;

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/', userRoutes);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server is running at http://localhost:${port}`);
});
