
exports.up = function(knex) {
  return (knex.schema
    .createTable('users', t => {
      t.increments();
      t.string('username', 128).notNullable().unique();
      t.string('password', 128).notNullable();
      t.string('department', 128);
    })
  )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
