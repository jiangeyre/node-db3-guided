const db = require("../data/db-config.js");

module.exports = {
    list,
    findById,
};

function list() {
    /*
        select * 
        from posts as p
        join users as u on p.user_id = u.id
    */
    return db("posts as p")
        .join("users as u", "p.user_id", "u.id")
        .select("p.id as postId", "p.contents", "u.username as postedBy");
}

function findById(id) {
    return db("posts as p")
        .join("users as u", "p.user_id", "u.id")
        .where("p.id", id)
        .select("p.id as postId", "p.contents", "u.username as postedBy")
        .first();
}
