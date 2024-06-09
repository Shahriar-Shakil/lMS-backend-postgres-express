var db = require("../models");
const { Sequelize, Op } = require("sequelize");
var User = db.User;
const addUser = async (req, res) => {
  const reqBody = req.body;
  const result = await User.create(reqBody);
  res.status(200).json(result);
};

const findAll = async (req, res) => {
  // attributes
  // const result = await User.findAll({
  //   attributes: [
  //     "id",
  //     ["username", "name"],
  //     [sequelize.fn("COUNT", sequelize.col("username")), "count_no"],
  //   ],
  //   group: ["User.id", "User.username"], // Group by id and username
  // });
  const result = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
  });
  res.status(200).json(result);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const result = await User.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  res.status(200).json(result);
};
const update = async (req, res) => {
  const id = req.params.id;

  await User.update(
    {
      ...req.body,
    },
    { where: { id } }
  );
  res.status(200).json({ message: "update success" });
};
const deleteOne = async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id } });
  res.status(200).json({ message: "Delete success" });
};

module.exports = {
  addUser,
  findAll,
  findOne,
  update,
  deleteOne,
};
