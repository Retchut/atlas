require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seedDB = require('./scripts/seedDatabase.js');


// start express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(process.env.STORAGE_DIR, express.static('storage'))

// mongoose
mongoose.connect(process.env.DBURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Connected to the database');
});
seedDB()


// routes
const atlasRouter = require('./routes/atlas');
app.use("/atlas", atlasRouter);

// start listening
app.listen(process.env.APPPORT, () => console.log('Started Server'));