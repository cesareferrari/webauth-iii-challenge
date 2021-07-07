const db = require('../data/db-config.js');

module.exports = {
  all,
  add,
  findById,
  findBy
}

function all() {
  return db('users');
}

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    })
    .catch(err => {
      return err;
    })
}

function findById(id) {
  return db('users').where({id}).first();
}

function findBy(filter) {
  return db('users').where(filter);
}
