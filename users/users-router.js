const router = require('express').Router();
//restricted middleware
const restricted = require('../auth/restricted-middleware.js');
const Users = require("./users-model.js");

router
  .route("/")
  .get((req, res) => {
      Users.find()
      .then(users => {
          res.status(200).json(users);
      })
      .catch(err => {
          res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
      })
  })

  module.exports = router;