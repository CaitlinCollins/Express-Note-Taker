// Api Routes
const path = require("path");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let notes = [];

    function addId(){
    const noteId = notes.map(newId => {
        newId.id = uuidv4();
        return newId
    });
    };

module.exports =  function(app) {

// Gets all the notes from the db.json.
app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json",'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
        const notes = JSON.parse(data);
        res.json(notes);
        }
    }); 
});

// Recieves new note and add it to db.json. Returns new note to client.
app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    notes.push(newNote);
    addId();
    
    fs.writeFile("./db/db.json", JSON.stringify(notes), "utf-8", function(err) {
        if (err) {
            throw err
        };
        console.log(notes);
    });
    res.json(notes);
});

// Deletes selected note by note id. Resets notes array with remainingNotes. 
app.delete("/api/notes/:id", function (req, res) {
    fs.readFile("./db/db.json",'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
        const newData = JSON.parse(data);
        const chosen = req.params.id;
        console.log(data);
        const remainingNotes = newData.filter(data => data.id != chosen);
        notes = remainingNotes;
   
    fs.writeFile("./db/db.json", JSON.stringify(remainingNotes), "utf-8", function(err) {
        if (err) {
            throw err
        };
    });

    res.json(remainingNotes);
}
}); 
});
};
