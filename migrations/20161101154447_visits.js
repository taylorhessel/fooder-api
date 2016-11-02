exports.up = function(knex, Promise) {
  return knex.schema.createTable('visits', function (table) {
    table.increments();
    table.string('user_id');
    table.string('restaurant_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visits');
};
