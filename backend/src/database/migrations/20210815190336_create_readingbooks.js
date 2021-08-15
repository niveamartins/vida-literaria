
exports.up = function(knex) {
    return knex.schema.createTable('user_readingbooks', function (table){
        table.increments('SQ_Book').primary();
        table.string('ID_BooksAPI').notNullable();
        table.date('DT_StartedRead').notNullable();
        table.integer('INT_MinutesReading');
        table.integer('INT_LastMinutesReading');
        table.timestamp('updated_at').notNullable();
        table.integer('FK_SQ_User').notNullable();

        table.foreign("FK_SQ_User").references("SQ_User").inTable("user_info");  
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_readingbooks');
};
