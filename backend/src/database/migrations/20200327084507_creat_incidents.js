
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); // chave primaria da tabela autoincrement

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // qual ong criou esse indident
        table.string('ong_id').notNullable();

        // criar chave extrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });     
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
