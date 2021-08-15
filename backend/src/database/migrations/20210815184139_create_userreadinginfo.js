
exports.up = function(knex) {
    return knex.schema.createTable('user_readinginfo', function (table){
        table.increments('SQ_ReadingInfo').primary();
        table.integer('INT_ConsecutiveDays');
        table.integer('INT_MaxConsecutiveDays');
        table.date('DT_LastReadDay')
        table.integer('INT_MinutesPerDay')
        table.integer('FK_SQ_User').notNullable();

        table.foreign("FK_SQ_User").references("SQ_User").inTable("user_info");  
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_readinginfo');
};
