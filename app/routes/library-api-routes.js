const db = require("../models");

module.exports = function (app) {
  app.get("/api/library/", async function (req, res) {
    const dbLibrary = await db.Library.findAll({});
    res.json(dbLibrary);
  });

  app.get("/api/library/:id", async function (req, res) {
    const dbLibrary = await db.Library.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbLibrary);
  });

  app.post("/api/library", async function (req, res) {
    const dbLibrary = await db.Library.create(req.title, req.genre, req.author);
    res.json(dbLibrary);
  });

  app.delete("/api/library/:id", async function (req, res) {
    const dbLibrary = await db.Library.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbLibrary);
  });
};
