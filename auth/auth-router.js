const router = require("express").Router();
const Users = require("../users/users-model.js");
const crypt = require("bcryptjs");

router.route("/register").post((req, res) => {
  let user = req.body;
  const hash = crypt.hashSync(user.password, 12);
  user.password = hash;
  Users.add(user)
    .then((usr) => {
      res.status(201).json({ message: `successful registration`, usr });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Something went wrong... ${err}, ${err.message}` });
    });
});

router.route("/login").post((req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && crypt.compareSync(password, user.password)) {
        console.log(username, password);
        req.session.user = user;
        res.status(200).json({ message: `welcome, ${username}` });
      } else {
        console.log(
          username,
          password,
          user.password,
          user,
          crypt.compareSync(password, user.password)
        );
        res.status(401).json({ message: "you shall not pass!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Something went wrong... ${err}, ${err.message}` });
    });
});

router.get("/logout", async (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.send("I dunno why but you cant log out");
      } else {
        res.send("you have logged out");
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
