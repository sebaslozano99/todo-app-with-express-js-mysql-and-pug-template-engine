const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/mainRoutes.js");



const app = express();


// SETTINGS
app.set("view engine", "pug"); // to use our TEMPLATE ENGINES we first set the type of template engine will use
app.set("views", path.join(__dirname, "views")); // then we set the path in which express will find all our template engines



// MIDDLEWARE 
app.use(express.static("public")); // let express knnow where to find static files (such as our css files) 
app.use(express.urlencoded({ extended: true }));


// ROUTES 
app.use(mainRoutes);



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})