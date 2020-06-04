const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');
const restricted = require('../auth/restricted-middleware.js');
const knexSessionConnect = require('connect-session-knex')(session)


const sessionConfig = {
  name: 'jtsession',
  secret: 'super sekrit',
  cookie: {
    maxAge: 1000 * 60 * 60, //1 sec times 60 times 60 is 1 hour
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
  //knexsessionstuff
  store: new knexSessionConnect({
    knex: require('../data/dbConfig.js'),
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
}

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig)); //adds req.session property to manage sessions


server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;