require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seedDB = require('./seedUtils.js');

const seedDBReactScript = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/storage', express.static('storage'))

    await mongoose.connect(process.env.DBURL + 'atlas', { useNewUrlParser: true });
    const db = mongoose.connection;
    await seedDB(db);
    await mongoose.connection.close();
}

seedDBReactScript();