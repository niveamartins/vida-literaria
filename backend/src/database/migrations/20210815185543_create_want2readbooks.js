
exports.up = function(knex) {
    return knex.schema.createTable('user_want2readbooks', function (table){
        table.increments('SQ_Book').primary();
        table.string('ID_BooksAPI').notNullable();
        table.integer('FK_SQ_User').notNullable();

        table.foreign("FK_SQ_User").references("SQ_User").inTable("user_info");  
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_want2readbooks');
};
