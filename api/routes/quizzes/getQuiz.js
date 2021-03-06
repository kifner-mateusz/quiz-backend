const Quizzes = require("../../models/quizzes");

module.exports = (req, res, next) => {
  res.cookie("game_token", "DAGSJRER$#%@%@GDG$#%2352");
  res.clearCookie("cart");
  console.log(req.cookies);

  const id = req.params.quizId;
  if (id) {
    console.log(id);
    Quizzes.findById(id)
      .select("-owner -answers")
      .exec()
      .then(data => {
        console.log(data);
        if (data) {
          res.status(200).json(data);
        } else {
        }
      })
      .catch(err => next(err));
  } else {
    Quizzes.find()
      .select("_id title description icon")
      .exec()
      .then(data => {
        if (data) {
          res.status(200).json(data);
        } else {
        }
      })
      .catch(err => next(err));
  }
};
