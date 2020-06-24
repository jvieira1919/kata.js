const path = require("path");
// const __dirname = path.resolve();

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile("index.html",{root: path.join(__dirname,"../public/views")});
  });
};