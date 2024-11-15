const dbConnection = require("../config/database.js");


const homepage = (req, res) => {
    res.render("homepage", { page: "home" });
}


// get todos
const todospage = async (req, res) => {
    try{
        const [rows] = await dbConnection.execute("SELECT * FROM todos");
        res.status(200).render("todos", { page: "todos", todos: rows })
    }
    catch(error){
        console.error(error || "Something went wrong!");
        res.render("todos", )
    }
}


//post todos
const todospost = async (req, res) => {
    const { task } = req.body;

    try{
        const [rows] = await dbConnection.execute("INSERT INTO todos (task) VALUES (?)", [task]);
        res.send("Added successfully!");
    }
    catch(error){
        res.render("todos", { page: "todos", todos: [], error: error })
    }
}



//delete todos
const todosdelete = (req, res) => {
    res.send("Deleted");
}


const aboutpage = (req, res) => {
    res.render("about", { page: "about" })
}



module.exports = { homepage, todospage, aboutpage, todospost, todosdelete }