const db = require("../models");

module.exports = function (app) {
  app.get("/api/books/", async function (req, res) {
    const dbBooks = await db.Books.findAll({});
    res.json(dbBooks);
  });

  app.get("/api/books/:id", async function (req, res) {
    const dbBooks = await db.Books.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbBooks);
  });

  app.post("/api/books", async function (req, res) {
    const dbBooks = await db.Books.create({
      title: req.title,
      genre: req.genre,
      author: req.author,
      review: req.review,
      complete: false,
    });
    res.json(dbBooks);
  });

  app.put("/api/books/:id", async function (req, res){
    const dbBooks = await db.Books.update({
      where:{
        id: req.params.id,
        review: req.params.review
      }
    })
  })

  app.delete("/api/books/:id", async function (req, res) {
    const dbBooks = await db.Books.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbBooks);
  });
};
