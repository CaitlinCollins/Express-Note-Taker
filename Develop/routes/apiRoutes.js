// Api Routes
const path = require("path");
const noteListItems = require("../public/assets/js/index")

module.exports =  function(app) {
app.get("/api/notes", function (req, res) {
    res.json(noteListItems);
});

app.post("/api/notes", function (req, res) {
    storedData.push(req.body);
    res.json(true);
});
};

