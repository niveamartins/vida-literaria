
exports.up = function(knex) {
    return knex.schema.createTable('user_finishedbooks', function (table){
        table.increments('SQ_Book').primary();
        table.string('ID_BooksAPI').notNullable();
        table.date('DT_StartedRead').notNullable();
        table.date('DT_FinishedRead').notNullable();
        table.integer('INT_MinutesRead');
        table.integer('INT_LastPageRead');
        table.integer('INT_WordRead');
        table.integer('FK_SQ_User').notNullable();

        table.foreign("FK_SQ_User").references("SQ_User").inTable("user_info");  
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_finishedbooks');
};
