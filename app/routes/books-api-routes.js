const db = require("../models");
// const modelBook = require("../models/books.js");


module.exports = function (app) {
  app.get("/api/books", async function (req, res) {
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
    const { title, genre, author, review, cover} = req.body;
  
    try {
      const dbBooks = await db.Book.create({
        title,
        genre,
        author,
        review,
        cover,
        complete: false,
      });
      res.json(dbBooks);
    } catch (error) {
      console.log(error);
    }
  });

  /*
  * PUT 
  * POST
  *  RAW 
  */  
  app.put("/api/books/:id", async function (req, res){
    const dbBooks = await db.Book.update(
      {review: req.body.review},
      {where: {id:req.params.id}}
    )
    res.json(dbBooks);
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
