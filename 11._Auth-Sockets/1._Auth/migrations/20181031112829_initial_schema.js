
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
            table.integer('room_id').unsigned().notNullable()
            table.integer('user_id').unsigned().notNullable()
            table.foreign('user_id').references('users.id');
            table.foreign('room_id').references('rooms.id');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
  	.dropTableIfExists('users')
  	.dropTableIfExists('messages')
  	.dropTableIfExists('rooms')
  	.dropTableIfExists('user_rooms');
};
