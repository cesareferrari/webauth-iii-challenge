const db = require('../data/db-config.js');

module.exports = {
  all
}

function all() {
  return db('users');
}
