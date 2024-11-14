const express = require("express");
const dbConnection = require("../config/database.js");


const mainRoutes = express.Router();



mainRoutes.get("/", (req, res) => {
    res.render("homepage", { page: "home" })
});


mainRoutes.get("/todos", async (req, res) => {
    try{
        const [rows] = await dbConnection.execute("SELECT * FROM todos");
        res.status(200).render("todos", { page: "todos", todos: rows })
    }
    catch(error){
        console.error(error || "Something went wrong!");
    }
    res.render("todos", { page: "todos" });
});


mainRoutes.get("/about", (req, res) => {
    res.render("about", { page: "about" })
});


module.exports = mainRoutes;