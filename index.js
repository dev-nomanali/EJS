const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apnacollege",
        content: "i lovecodin"
    },
    {
        username: "Noman Ali",
        content: "Hard work is important ton achive success",
    },
    {
        username: "Naved Ali",
        content: "i got selected for my 1st internship!",
    },

]

app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content});
    res.redirect("/posts")
})

app.listen(port, () => {
    console.log("Listening to port : 8080");
});