require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pathology = require('./models/pathology'); // REMOVE

// start express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(process.env.STORAGE_DIR, express.static('storage'))

 // REMOVE
// seed db
const seedData = [
    {
        "name" : "test0",
        "description" : "testDescription0",
        "imageHash" : "000"
    },
    {
        "name" : "test1",
        "description" : "testDescription1",
        "imageHash" : "000"
    },
    {
        "name" : "test2",
        "description" : "testDescription2",
        "imageHash" : "000"
    },
    {
        "name" : "test3",
        "description" : "testDescription3",
        "imageHash" : "000"
    },
    {
        "name" : "test4",
        "description" : "testDescription4",
        "imageHash" : "000"
    },
    {
        "name" : "test5",
        "description" : "testDescription5",
        "imageHash" : "FFF"
    },
    {
        "name" : "test6",
        "description" : "testDescription6",
        "imageHash" : "FFF"
    },
    {
        "name" : "test7",
        "description" : "testDescription7",
        "imageHash" : "FFF"
    },
    {
        "name" : "test8",
        "description" : "testDescription8",
        "imageHash" : "FFF"
    },
    {
        "name" : "test9",
        "description" : "testDescription9",
        "imageHash" : "FFF"
    }
];
const seedDB = async () => {
    await Pathology.deleteMany({});
    await Pathology.insertMany(seedData);
};
 // REMOVE

// mongoose
mongoose.connect(process.env.DBURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Connected to the database');
    seedDB().then(console.log("Database seeded")); // REMOVE
});


// routes
const atlasRouter = require('./routes/atlas');
app.use("/atlas", atlasRouter);

// start listening
app.listen(process.env.APPPORT, () => console.log('Started Server'));