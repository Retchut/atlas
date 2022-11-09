require('dotenv').config();
const mongoose = require('mongoose');
const Pathology = require('../models/pathology');
const seedData = require('./seedData.json');

const modifyDB = async() => {
    await Pathology.deleteMany({});
    await Pathology.insertMany(seedData);
}

const seedDB = async (connection) => {
    connection.on('error', (error) => console.log(error));
    connection.once('open', () => console.log('Connected to the database'));

    await modifyDB().then(console.log("Database seeded"));
}

module.exports = seedDB;