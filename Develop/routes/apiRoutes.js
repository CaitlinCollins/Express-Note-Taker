// Api Routes
const path = require("path");
const fs = require('fs');
const notes = [];

// let sum = 0;
// function addId() {
//     notes.forEach(newId);
//     newId();
// }

// function newId(){
//     sum += 1
//     notes.id = sum;
// }


module.exports =  function(app) {
// Gets all the notes from the db.json.

// const getNotes = () => {
//     return $.ajax({
//       url: "/api/notes",
//       method: "GET",
//     });
//   };

app.get("/api/notes", function (req, res) {
    // res.json(true);
});

// Recieves new note and add it to db.json. Returns new note to client.
// const saveNote = (note) => {
//     return $.ajax({
//       url: "/api/notes",
//       data: note,
//       method: "POST",
//     });
//   };

app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    notes.push(newNote);
    // addId()

    fs.writeFile("./db/db.json", JSON.stringify(notes), "utf-8", function(err) {
        if (err) {
            throw err
        };
    });
    res.json(notes);
});
};



// fs.readFile('../db/db.json', 'utf-8', function(err, data) {
// 	if (err) {
//         throw err
//     };
// 	const storedData = JSON.parse(data);
//     storedData.push(noteListItems);
// });

