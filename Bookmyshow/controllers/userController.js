const User = require('../models/UserModel');

// Get all records
exports.getAllRecords = (req, res) => {
    User.find({})
        .then((data) => res.render('view', { record: data }))
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error fetching data');
        });
};

// Render add form
exports.renderAddForm = (req, res) => {
    res.render('add');
};

// Add a new record
exports.addRecord = (req, res) => {
    const { title, description, price } = req.body;
    const image = req.file ? req.file.path : '';

    User.create({ title, description, price, image })
        .then(() => {
            console.log('Record added successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error adding record');
        });
};

// Delete a record
exports.deleteRecord = (req, res) => {
    const id = req.query.deleteid;
    User.findByIdAndDelete(id)
        .then(() => {
            console.log('Record deleted successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting record');
        });
};

// Render edit form
exports.renderEditForm = (req, res) => {
    const id = req.query.editid;
    User.findById(id)
        .then((data) => res.render('edit', { movie: data }))
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error fetching record');
        });
};

// Update a record
exports.updateRecord = (req, res) => {
    const { editid, title, description, price } = req.body;
    const updateData = { title, description, price };

    if (req.file) {
        updateData.image = req.file.path;
    }

    User.findByIdAndUpdate(editid, updateData, { new: true })
        .then(() => {
            console.log('Record updated successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating record');
        });
};
