const express = require("express");
const app = express ();

const {connectDB} = require('./config/db');

const PORT = 5000;

const start = () => {
    try {
        connectDB();
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
};

start();
