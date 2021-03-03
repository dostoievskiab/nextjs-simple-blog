
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('posts', function (table) {
        table.increments()
        table.string('title')
        table.text('text')
        table.timestamps(true,true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};
