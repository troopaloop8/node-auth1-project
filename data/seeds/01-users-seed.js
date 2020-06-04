const crypt = require("bcryptjs");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "user",
          password: crypt.hashSync("password", 12),
          email: "user@email.com",
        },
        {
          username: "poweruser",
          password: crypt.hashSync("qwerty", 12),
          email: "poweruser@email.com",
        },
        {
          username: "dumdum",
          password: crypt.hashSync("123456789", 12),
          email: "dumdum@email.com",
        },
      ]);
    });
};
