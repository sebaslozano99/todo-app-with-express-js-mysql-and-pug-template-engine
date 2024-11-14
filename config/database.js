const mysql = require("mysql2/promise");
require("dotenv").config();


console.log(process.env.DB_HOST);


const dbConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
});



module.exports = dbConnection;
