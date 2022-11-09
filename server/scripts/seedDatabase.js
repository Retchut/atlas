require('dotenv').config();
const mongoose = require('mongoose');
const Pathology = require('../models/pathology');
const seedData = require('./seedData.json');

const modifyDB = async() => {
    await Pathology.deleteMany({});
    await Pathology.insertMany(seedData);
}

const seedDB = async () => { 
    await mongoose.connect(process.env.DBURL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', (error) => console.log(error));
    db.once('open', () => console.log('Connected to the database'));

    await modifyDB().then(console.log("Database seeded"));
    await mongoose.connection.close();
}

module.exports = seedDB;