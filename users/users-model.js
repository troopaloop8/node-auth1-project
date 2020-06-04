const db = require("../data/dbConfig.js")

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users').select("id", "username", "email", "password").orderBy("id");
}

function findById(id) {
    return db("users").where({id}).first();
}

function add(user) {
    return db("users").insert(user, "id");
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
}