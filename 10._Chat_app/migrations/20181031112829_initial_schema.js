
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('email');
            table.string('password');
            table.dateTime('created_at');
        })
        .createTable('messages', function(table) {
            table.increments('id').primary();
            table.string('message');
            table.integer('user_id');
            table.dateTime('timestamp');
            table.integer('room_id');
        })
        .createTable('rooms', function(table) {
            table.increments('id').primary();
            table.string('name');
        })
        .createTable('user_rooms', function(table) {
            table.increments('id').primary();
            table.integer('user_id');
            table.integer('room_id');
//            table.integer('user_id').references('id').inTable('users');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
  	.dropTableIfExists('users')
  	.dropTableIfExists('messages')
  	.dropTableIfExists('rooms')
  	.dropTableIfExists('user_rooms');
};
