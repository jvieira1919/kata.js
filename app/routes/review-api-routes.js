const db = require("../models");

module.exports = function (app) {
  app.get("/api/reviews", async function (req, res) {
    let query = {};
    if (req.query.library_id) {
      query.LibraryId = req.query.library_id;
    }
    const dbReview = await db.Review.findAll({
      where: query,
    });
    res.json(dbReview);
  });

  app.get("/api/reviews/:id", async function (req, res) {
    const dbReview = await db.Review.findOne({
      where: {
        id: id.params.id,
      },
    });
    res.json(dbReview);
  });

  app.post("/api/reviews", async function (req, res) {
    const dbReview = await db.Review.create(req.body);
    res.json(dbReview);
  });

  app.delete("/api/reviews/:id", async function (req, res) {
    const dbReview = await db.Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json();
  });

  app.put("/api/reviews", async function (req, res) {
    const dbReview = await db.Review.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json(dbReview);
  });
};
