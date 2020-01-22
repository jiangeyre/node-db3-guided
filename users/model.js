const db = require('../data/db-config.js');

// above the fold
module.exports = {
    list, 
};

// implementation details
function list() {
    // select * from users
    return db.select('*').from('users');
};