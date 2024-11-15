const express = require("express");
const { homepage, todospage, aboutpage, todospost, todosdelete } = require("../controllers/appController.js");



const mainRoutes = express.Router();



mainRoutes.get("/", homepage);

mainRoutes.get("/todos", todospage);

mainRoutes.post("/todos", todospost);

mainRoutes.delete("/todos", todosdelete);

mainRoutes.get("/about", aboutpage);


module.exports = mainRoutes;