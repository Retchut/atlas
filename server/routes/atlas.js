const express = require('express');
const router = express.Router();
const Pathology = require('../models/pathology');


// GET all
router.get('/', async (req, res) => {
    try {
        const paths = await Pathology.find();
        res.json(paths);
    }
    catch (err) {
        res.status(500).json({ message : err.message })
    }
});

// GET one
router.post('/:id', function(req, res) {
    res.json({ message : 'GET one' });
});

// PUT
router.put('/:id', function(req, res) {
    res.json({ message : 'PUT' });
});

// PATCH
router.patch('/:id', function(req, res) {
    res.json({ message : 'PATCH' });
});

// DELETE
router.delete('/:id', function(req, res) {
    res.json({ message : 'DELETE' });
});


module.exports = router;