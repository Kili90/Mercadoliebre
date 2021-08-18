const express = require("express");
const { get } = require("http");
const app = express();

const path = require("path");

app.listen(process.env.PORT || 3000, () => {
    console.log("Se prendió!");
});

//mETODOS DE HTTP
// - GET
// - POST
// - PUT

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});
