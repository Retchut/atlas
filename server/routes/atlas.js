const express = require('express');
const router = express.Router();
const Pathology = require('../models/pathology');


// GET all
router.get('/', async (req, res) => {
    try {
        const paths = await Pathology.find();
        console.log(paths);
        res.status(200).json(paths);
    }
    catch (err) {
        res.status(500).json({ message : err.message })
    }
});

// GET one
router.post('/', async (req, res) => {
    const pathology = new Pathology({
        name : req.body.name,
        description : req.body.description,
        imageHash : req.body.imageHash
    });

    try {
        const newPathology = await pathology.save();
        res.status(201).json(newPathology);
    }
    catch (err) {
        res.status(400).json({ message : err.message });
    }
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