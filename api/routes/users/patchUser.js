const Users = require("../../models/users");

module.exports = (req, res, next) => {
  const id = req.params.userId;
  const update = {};
  for (const user_data of req.body) {
    update[user_data.key] = user_data.value;
  }
  Users.updateOne({ _id: id }, { $set: update })
    .exec()
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(err => next(err));
};
