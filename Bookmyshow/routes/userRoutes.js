const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    getAllRecords,
    renderAddForm,
    addRecord,
    deleteRecord,
    renderEditForm,
    updateRecord,
} = require('../controllers/userController');

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000);
        cb(null, `${file.fieldname}-${uniq}${path.extname(file.originalname)}`);
    },
});

const fileUpload = multer({ storage }).single('image');

// Routes
router.get('/', getAllRecords);
router.get('/add', renderAddForm);
router.post('/addrecord', fileUpload, addRecord);
router.get('/delete', deleteRecord);
router.get('/edit', renderEditForm);
router.post('/updatetRecord', fileUpload, updateRecord);

module.exports = router;
