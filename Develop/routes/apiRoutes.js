// Api Routes
const path = require("path");
const storedData = require("../data/data");
const newNote = require("../public/app");

module.exports =  function(app) {
app.get("/api/notes", function (req, res) {
    res.json(storedData);
});

app.post("/api/notes", function (req, res) {
    storedData.push(req.body);
    res.json(true);
});
};

