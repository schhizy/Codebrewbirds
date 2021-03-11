const express = require("express"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.set('useUnifiedTopology', true);
const url = process.env.MONGODB_URI || 3000

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log("Connected to database.");
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("home");
});

let port = process.env.PORT || 3000
app.listen(port, process.env.IP, () => {
    console.log("showing on port 3000.");
});