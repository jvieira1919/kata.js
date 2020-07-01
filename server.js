const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./app/config/passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./app/models");

app.use(express.static("app/public"));

require("./app/routes/html-routes.js")(app);
require("./app/routes/books-api-routes.js")(app);
require("./app/routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
