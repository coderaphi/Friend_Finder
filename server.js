
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

require("./app/routing/htmlroutes")(app);
require("./app/routing/apiroutes")(app);

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
 