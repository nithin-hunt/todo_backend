const {Sequelize} = require('sequelize');

const createDB = new Sequelize('TODO APP', 'user', 'pass', {
    dialect: 'sqlite',
    host: './config/db.sqlite',
});

const connectDB = () => {
    createDB.sync().then(() => {
        console.log("Connected to DB...");
    })
    .catch ((e) => {
        console.log("DB connection failed...")
    })
};

module.exports = {createDB, connectDB};