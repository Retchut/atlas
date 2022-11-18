require('dotenv').config();
const mongoose = require('mongoose');
const pathologySchema = require('../models/pathology');
const seedData = require('../data/seedData.json');

const modifyDB = async() => {
    for(const category in seedData){
        console.log(category);
        const categoryModel = mongoose.model(category, pathologySchema);
        await categoryModel.deleteMany({});
        await categoryModel.insertMany(seedData[category]);
    }
}

const seedDB = async (connection) => {
    connection.on('error', (error) => console.log(error));
    connection.once('open', () => console.log('Connected to the database'));

    await modifyDB().then(console.log("Database seeded"));
}

module.exports = seedDB;