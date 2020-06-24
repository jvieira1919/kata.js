const db = require("../models");

module.exports = function (app) {
    app.get("/api/library/", async function(req, res) {
        const dbLibrary = await db.Library.findAll({})
        res.json(dbLibrary);
    });

    app.get("/api/library/:title", async function(req, res){
        const dbLibrary = await db.Library.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json(dbLibrary);
    });

    app.post("/api/library", async function(req, res){

    });

    app.delete("/api/authors/:id", async function(req, res) {
        const dbLibrary = await db.Library.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json(dbLibrary);
      });
}