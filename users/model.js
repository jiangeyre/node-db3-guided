const db = require("../data/db-config.js");

// above the fold
module.exports = {
    list,
    findById,
    insert,
};

// don't forget to "return" the call to the database

// implementation details
function list() {
    // select * fom users;
    return db.select("*").from("users");
    // return db('users'); // does the same thing
}

function findById(userId) {
    // select * from users where id = ?
    return db("users")
        .where({ id: userId })
        .first();
    // return db("users").where('id', userId).first();
}

function insert(user) {
    return db("users")
        .insert(user)
        .then(([id]) => {
            return findById(id);
        });
}
