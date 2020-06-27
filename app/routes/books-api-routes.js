const db = require("../models");
// const modelBook = require("../models/books.js");


module.exports = function (app) {
  app.get("/api/books/", async function (req, res) {
    const dbBooks = await db.Book.findAll({});
    res.json(dbBooks);
  });

  app.get("/api/books/:id", async function (req, res) {
    const dbBooks = await db.Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbBooks);
  });

  app.post("/api/books", async function (req, res) {
    const {title, genre, author, review} = req.body;
    const dbBooks = await db.Book.create({
      title,
      genre,
      author,
      review,
      complete: false,
    });
    res.json(dbBooks);
  });

  app.put("/api/books/:id", async function (req, res){
    const dbBooks = await db.Book.update({
      where:{
        id: req.params.id,
        review: req.params.review
      }
    })
  })

  app.delete("/api/books/:id", async function (req, res) {
    const dbBooks = await db.Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbBooks);
  });
};
