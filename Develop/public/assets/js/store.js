const fs = require('fs');
const noteListItems = require("./index");

fs.readFile('../db/db.json', 'utf-8', function(err, data) {
	if (err) {
        throw err
    };
	const storedData = JSON.parse(data);
    storedData.push(noteListItems);
});

fs.writeFile("../db/db.json", JSON.stringify(storedData), "utf-8", function(err) {
    if (err) {
        throw err
    };
});

