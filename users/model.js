const db = require('../data/db-config.js');

// above the fold
module.exports = {
    list,
    findByID,
    insert, 
};

// implementation details
function list() {
    // select * from users
    return db.select('*').from('users');
    // return db('users'); // does the same thing
};

function findByID(userId) {
    // select * from users where id = ?
    return db('users')
        .where({ id: userId })
        .first();
    // return db('users').where('id', userID);
};

function insert(user) {
    return db('users')
        .insert(user)
        .then(([id]) => {
            return findByID(id);
        });
};