require('dotenv').config();
const mongoose = require('mongoose');
const pathologySchema = require('../models/pathology');
const seedData = require('../data/seedData.json');

const modifyDB = async () => {
    for(const category in seedData){
        const categoryModel = mongoose.model(category, pathologySchema);
        // await categoryModel.deleteMany({});
        await categoryModel.insertMany(seedData[category]);
    }
}

const seedDB = async (connection) => {
    connection.getClient().db().dropDatabase()
    await modifyDB().then(console.log("Database seeded"));
}

module.exports = seedDB;