const express = require("express");
const app = express();

// setting up port
const PORT = process.env.PORT || 8080;

// for reading forms
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// setup public folder for css, images, js, etc.
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
