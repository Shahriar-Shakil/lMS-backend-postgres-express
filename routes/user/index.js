module.exports = (app) => {
  const user = require("../../controller/userController");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/register", user.addUser);

  // // Retrieve all Tutorials
  router.get("/login", user.login);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // // Retrieve a single Tutorial with id
  // router.get("/:id", user.findOne);

  // // // Update a Tutorial with id
  // router.put("/:id", user.update);

  // // // Delete a Tutorial with id
  // router.delete("/:id", user.deleteOne);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/user", router);
};
