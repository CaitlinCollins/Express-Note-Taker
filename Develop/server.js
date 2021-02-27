var express = require("express");
var app = express();

// setting up port
var PORT = process.env.PORT || 8080;

// for reading forms
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// setup public folder for css, images, js, etc.
app.use(express.static('public'));

require("./routes/htmlRoutes")(app);

// listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
