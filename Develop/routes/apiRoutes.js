// Api Routes
const path = require("path");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const notes = [];


function addId(){
const noteId = notes.map(newId => {
    newId.id = uuidv4();
    return newId
});
};

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
    addId()

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

