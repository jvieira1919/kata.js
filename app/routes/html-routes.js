const path = require("path");
// const __dirname = path.resolve();

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile("index.html",{root: path.join(__dirname,"../public/views")});
  });
  app.get("/book.html", function (req, res) {
    res.sendFile("book.html",{root: path.join(__dirname,"../public/views")});
  });
  app.get("/user", function (req, res) {
    res.sendFile("user.html",{root: path.join(__dirname,"../public/views")});
  });

  app.get("/read.html", function (req, res) {
    res.sendFile("read.html",{root: path.join(__dirname,"../public/views")});
  });
};