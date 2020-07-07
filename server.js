// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { Server } = require("http");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var waiting = [];
var newTable = [
    {
        name: "Gary",
        phone: 9384556435,
        id: 123,
        email: "gary@example.com"
    }
];




// Routes
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});


app.get("/api/tables", function (req, res) {
    return res.json(newTable);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waiting);

});

app.post("/api/tables", function (req, res) {
    var tableVar = req.body;

    console.log(tableVar);

    if(newTable.length >= 5) {
        waiting.push(tableVar);
    } else {
        newTable.push(tableVar);
    }
    res.json(tableVar);

})

app.listen(PORT, function() {
    console.log("app listening on port " + PORT);
});