
exports.up = function(knex) {
    return knex.schema.createTable('user_info', function (table){
        table.increments('SQ_User').primary();
        table.string('STR_UserKey').unique();
        table.string('STR_Name', 25).notNullable();
        table.string('STR_Password', 30).notNullable();
        table.string('STR_Email', 30).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_info');
};
