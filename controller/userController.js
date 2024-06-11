var db = require("../models");
const { Op, where } = require("sequelize");
var User = db.User;
const asyncHandler = require("express-async-handler");
const { constants } = require("../lib/constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addUser = asyncHandler(async (req, res, next) => {
  const { first_name, email, password, UserType } = req.body;

  //check all field are available
  if (!first_name || !email || !password || !UserType) {
    res.status(constants.VALIDATION_ERROR);
    return next(
      new Error(
        "All fields (first_name, email, password, UserType) are required"
      )
    );
  }
  const userAvailable = await User.findOne({ where: { email } });
  if (userAvailable) {
    res.status(constants.CONFLICT);

    return next(new Error("User already registered"));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(200).json(result);
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All fields are mandatory" });
  }
  const user = await User.findOne({ where: { email } });
  const expiresInDays = process.env.COOKIE_EXPIRATION_DAYS || "2d";
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: { email: user.email, UserID: user.UserID },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: expiresInDays }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(constants.UNAUTHORIZED);
    return next(new Error("Email or Password is not valid"));
  }
});

const findOne = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await User.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  res.status(200).json(result);
});
const update = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await User.update(
    {
      ...req.body,
    },
    { where: { id } }
  );
  res.status(200).json({ message: "update success" });
});
const deleteOne = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id } });
  res.status(200).json({ message: "Delete success" });
});

module.exports = {
  addUser,
  findOne,
  update,
  deleteOne,
  login,
};
